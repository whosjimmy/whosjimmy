<template>
	<div class="youtube-videos">
		<div class="banner">
			<img src="/channels4_banner.jpg" />
		</div>

		<div v-if="loading" class="loading">Loading videos...</div>

		<div v-else-if="error" class="error">
			Error loading videos: {{ error }}
			<button class="btn" @click="fetchVideos">Retry</button>
		</div>

		<div v-else class="videos-grid">
			<div
				v-for="video in videos"
				:key="video.id"
				:ref="`card-${video.id}`"
				class="video-card"
				:class="{ 'is-expanding': expandingVideo === video.id }"
				@mouseenter="startPreview(video.id)"
				@mouseleave="stopPreview"
				@click="openVideoModal(video)"
			>
				<div class="video-thumbnail">
					<!-- Static thumbnail -->
					<img
						:src="video.thumbnail"
						:alt="video.title"
						class="thumbnail-static"
						:class="{ 'fade-out': hoveredVideo === video.id }"
					/>

					<!-- Preview iframe (shows on hover) -->
					<iframe
						v-if="hoveredVideo === video.id && !modalVideo"
						:src="`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${video.id}`"
						class="video-preview"
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen
					></iframe>

					<!-- Fallback: GIF-style preview using multiple thumbnails -->
					<div
						v-if="
							previewMode === 'thumbnails' &&
							hoveredVideo === video.id &&
							!modalVideo
						"
						class="thumbnail-preview"
					>
						<img
							v-for="(thumb, index) in getThumbnailSequence(
								video.id
							)"
							:key="index"
							:src="thumb"
							:alt="video.title"
							class="preview-frame"
							:class="{ active: currentPreviewFrame === index }"
						/>
					</div>

					<div class="play-overlay">▶</div>

					<!-- Optional: Hover progress bar -->
					<div class="hover-progress"></div>
				</div>

				<div class="video-info">
					<h3 class="video-title">{{ video.title }}</h3>
					<p class="video-description">
						{{ truncateDescription(video.description) }}
					</p>
					<div class="video-meta">
						<span class="publish-date">
							{{ formatDate(video.publishedAt) }}
						</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal Video Player -->
		<div
			v-if="modalVideo"
			class="video-modal-overlay"
			:class="{ 'is-visible': modalVisible }"
			@click="closeVideoModal"
		>
			<div class="video-modal-backdrop"></div>

			<div
				class="video-modal"
				:class="{ 'is-expanded': modalExpanded }"
				:style="modalStyles"
				@click.stop
			>
				<button
					class="modal-close-btn"
					aria-label="Close video"
					@click="closeVideoModal"
				>
					✕
				</button>

				<div class="modal-video-container">
					<iframe
						:src="`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&origin=${origin}`"
						class="modal-video-player"
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen
					></iframe>
				</div>

				<div class="modal-video-info">
					<h2 class="modal-video-title">{{ modalVideo.title }}</h2>
					<div class="modal-video-meta">
						<span class="modal-publish-date">
							{{ formatDate(modalVideo.publishedAt) }}
						</span>
					</div>
					<p class="modal-video-description">
						{{ modalVideo.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'YouTubeVideos',
	data() {
		return {
			videos: [],
			loading: false,
			error: null,
			channelId: 'UCPraC_i-mKFuwq17vUsrzWg',
			hoveredVideo: null,
			previewMode: 'iframe', // 'iframe' or 'thumbnails'
			currentPreviewFrame: 0,
			previewInterval: null,
			hoverTimeout: null,
			// Modal states
			modalVideo: null,
			modalVisible: false,
			modalExpanded: false,
			expandingVideo: null,
			modalStyles: {},
			origin: window.location.origin,
		}
	},

	async mounted() {
		await this.fetchVideos()
	},

	methods: {
		async fetchVideos() {
			this.loading = true
			this.error = null

			try {
				// Using a CORS proxy to fetch YouTube RSS feed
				const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${this.channelId}`
				const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`

				const response = await fetch(proxyUrl)
				const data = await response.json()

				if (!response.ok) {
					throw new Error('Failed to fetch videos')
				}

				// Parse the XML response
				const parser = new DOMParser()
				const xmlDoc = parser.parseFromString(data.contents, 'text/xml')
				const entries = xmlDoc.querySelectorAll('entry')

				this.videos = Array.from(entries).map((entry) => {
					const videoId = entry.querySelector('videoId')?.textContent
					const title = entry.querySelector('title')?.textContent
					const description =
						entry.querySelector('media\\:description, description')
							?.textContent || ''
					const publishedAt =
						entry.querySelector('published')?.textContent
					const thumbnail =
						entry
							.querySelector('media\\:thumbnail, thumbnail')
							?.getAttribute('url') ||
						`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`

					return {
						id: videoId,
						title,
						description,
						publishedAt,
						thumbnail,
					}
				})
			} catch (err) {
				this.error = err.message
				console.error('Error fetching YouTube videos:', err)
			} finally {
				this.loading = false
			}
		},

		startPreview(videoId) {
			// Don't show preview if modal is open
			if (this.modalVideo) return

			// Add a small delay before showing preview to avoid flickering
			this.hoverTimeout = setTimeout(() => {
				this.hoveredVideo = videoId

				// If using thumbnail preview mode, start cycling through frames
				if (this.previewMode === 'thumbnails') {
					this.currentPreviewFrame = 0
					this.previewInterval = setInterval(() => {
						this.currentPreviewFrame =
							(this.currentPreviewFrame + 1) % 4
					}, 800) // Change frame every 800ms
				}
			}, 300) // 300ms delay before preview starts
		},

		stopPreview() {
			// Clear the hover timeout
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout)
				this.hoverTimeout = null
			}

			// Stop preview
			this.hoveredVideo = null

			// Clear thumbnail cycling interval
			if (this.previewInterval) {
				clearInterval(this.previewInterval)
				this.previewInterval = null
			}
			this.currentPreviewFrame = 0
		},

		openVideoModal(video) {
			// Stop any preview that might be running
			this.stopPreview()

			// Get the clicked card element
			const cardElement = this.$refs[`card-${video.id}`]?.[0]
			if (!cardElement) return

			// Get the card's position and size for the animation
			const cardRect = cardElement.getBoundingClientRect()

			// Set expanding state
			this.expandingVideo = video.id

			// Set initial modal styles to match the card position
			this.modalStyles = {
				position: 'fixed',
				top: `${cardRect.top}px`,
				left: `${cardRect.left}px`,
				width: `${cardRect.width}px`,
				height: `${cardRect.height}px`,
				borderRadius: '12px',
			}

			// Set the modal video and make overlay visible
			this.modalVideo = video
			this.modalVisible = true

			// Prevent body scroll
			document.body.style.overflow = 'hidden'

			// Small delay to allow the modal to render, then expand
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					this.expandModal()
				})
			})
		},

		expandModal() {
			// Calculate expanded modal dimensions
			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const modalWidth = Math.min(windowWidth * 0.9, 1200)
			const modalHeight = Math.min(windowHeight * 0.9, 800)

			// Update modal styles for expansion
			this.modalStyles = {
				position: 'fixed',
				top: `${(windowHeight - modalHeight) / 2}px`,
				left: `${(windowWidth - modalWidth) / 2}px`,
				width: `${modalWidth}px`,
				height: `${modalHeight}px`,
				borderRadius: '16px',
			}

			this.modalExpanded = true
		},

		closeVideoModal() {
			// Get the original card position if it still exists
			const cardElement = this.$refs[`card-${this.modalVideo?.id}`]?.[0]

			if (cardElement) {
				const cardRect = cardElement.getBoundingClientRect()

				// Animate back to original position
				this.modalStyles = {
					position: 'fixed',
					top: `${cardRect.top}px`,
					left: `${cardRect.left}px`,
					width: `${cardRect.width}px`,
					height: `${cardRect.height}px`,
					borderRadius: '12px',
				}
			}

			this.modalExpanded = false

			// Wait for animation to complete before hiding
			setTimeout(() => {
				this.modalVideo = null
				this.modalVisible = false
				this.expandingVideo = null
				this.modalStyles = {}

				// Restore body scroll
				document.body.style.overflow = ''
			}, 400) // Match the CSS transition duration
		},

		getThumbnailSequence(videoId) {
			// YouTube provides different thumbnail qualities at different timestamps
			return [
				`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`, // Default
				`https://img.youtube.com/vi/${videoId}/1.jpg`, // 25% mark
				`https://img.youtube.com/vi/${videoId}/2.jpg`, // 50% mark
				`https://img.youtube.com/vi/${videoId}/3.jpg`, // 75% mark
			]
		},

		truncateDescription(description, maxLength = 150) {
			if (!description) return ''
			return description.length > maxLength
				? description.substring(0, maxLength) + '...'
				: description
		},

		formatDate(dateString) {
			return new Date(dateString).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})
		},
	},
}
</script>

<style scoped>
.banner {
	width: 100%;
	height: 200px;
	border-radius: 16px;
	left: 0;
	top: 0;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
	}
}
.youtube-videos {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

.loading,
.error {
	text-align: center;
	padding: 40px;
	font-size: 18px;
}

.error {
	color: #e74c3c;
}

.videos-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 24px;
	margin: 20px 0;
}

.video-card {
	background: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;
	cursor: pointer;
}

.video-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.video-card.is-expanding {
	opacity: 0.5;
	transform: scale(0.98);
}

.video-thumbnail {
	position: relative;
	overflow: hidden;
}

.video-thumbnail img.thumbnail-static {
	width: 100%;
	height: 200px;
	object-fit: cover;
	transition: opacity 0.3s ease;
}

.video-thumbnail img.thumbnail-static.fade-out {
	opacity: 0;
}

.video-preview {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200px;
	z-index: 2;
	pointer-events: none;
	background:
		linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
		linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
		linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
	background-size: 20px 20px;
	background-position:
		0 0,
		0 10px,
		10px -10px,
		-10px 0px;
	animation: loading 0.5s linear infinite;
}

@keyframes loading {
	0% {
		background-position:
			0 0,
			0 10px,
			10px -10px,
			-10px 0px;
	}
	100% {
		background-position:
			20px 20px,
			20px 30px,
			30px 10px,
			10px 20px;
	}
}

.hover-progress {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 3px;
	background: #ff0000;
	transform-origin: left;
	transform: scaleX(0);
	transition: transform 2s linear;
	z-index: 3;
}

.video-card:hover .hover-progress {
	transform: scaleX(1);
}

.thumbnail-preview {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200px;
	z-index: 2;
}

.preview-frame {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.preview-frame.active {
	opacity: 1;
}

.play-overlay {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.8);
	color: white;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	opacity: 0;
	transition: opacity 0.2s ease;
	pointer-events: none;
}

.video-thumbnail:hover .play-overlay {
	opacity: 1;
}

.video-info {
	padding: 16px;
}

.video-title {
	font-size: 16px;
	font-weight: 600;
	margin: 0 0 8px 0;
	line-height: 1.4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.video-description {
	color: #666;
	font-size: 14px;
	line-height: 1.5;
	margin: 0 0 12px 0;
}

.video-meta {
	font-size: 12px;
	color: #888;
}

/* Modal Styles */
.video-modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.3s ease,
		visibility 0.3s ease;
}

.video-modal-overlay.is-visible {
	opacity: 1;
	visibility: visible;
}

.video-modal-backdrop {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(10px);
}

.video-modal {
	position: fixed;
	background: white;
	border-radius: 12px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 1001;
	display: flex;
	flex-direction: column;
}

.modal-close-btn {
	position: absolute;
	top: 16px;
	right: 16px;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	font-size: 18px;
	cursor: pointer;
	z-index: 1002;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background 0.2s ease;
}

.modal-close-btn:hover {
	background: rgba(0, 0, 0, 0.9);
}

.modal-video-container {
	position: relative;
	width: 100%;
	flex: 1;
	min-height: 0;
}

.modal-video-player {
	width: 100%;
	height: 100%;
	border: none;
}

.modal-video-info {
	padding: 24px;
	background: white;
	max-height: 200px;
	overflow-y: auto;
}

.modal-video-title {
	font-size: 24px;
	font-weight: 700;
	margin: 0 0 12px 0;
	line-height: 1.3;
	color: #333;
}

.modal-video-meta {
	margin-bottom: 16px;
}

.modal-publish-date {
	color: #666;
	font-size: 14px;
	font-weight: 500;
}

.modal-video-description {
	color: #555;
	font-size: 16px;
	line-height: 1.6;
	margin: 0;
	white-space: pre-wrap;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.video-modal.is-expanded {
		top: 50% !important;
		left: 50% !important;
		transform: translate(-50%, -50%);
		width: 95vw !important;
		height: 85vh !important;
		max-width: 95vw;
		max-height: 85vh;
	}

	.modal-video-info {
		padding: 16px;
	}

	.modal-video-title {
		font-size: 20px;
	}
}
</style>
