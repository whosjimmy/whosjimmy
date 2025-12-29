<!-- pages/Portfolio/Videos.vue -->
<template>
	<div class="youtube-videos">
		<div class="banner">
			<img src="/channels4_banner.jpg" alt="Channel Banner" />
		</div>

		<!-- Subscribe Button -->
		<div class="subscribe-section">
			<button
				class="subscribe-btn"
				:class="{ subscribed: subscriptionStatus.isSubscribed }"
				:disabled="youtubeAPI.loading.value"
				@click="handleSubscribe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
					/>
				</svg>
				{{
					subscriptionStatus.isSubscribed ? 'Subscribed' : 'Subscribe'
				}}
			</button>
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
				:ref="(el) => setCardRef(el, video.id)"
				class="video-card"
				:class="{ 'is-expanding': expandingVideo === video.id }"
				@mouseenter="startPreview(video.id)"
				@mouseleave="stopPreview"
				@click="openVideoModal(video)"
			>
				<div class="video-thumbnail">
					<img
						:src="video.thumbnail"
						:alt="video.title"
						class="thumbnail-static"
						:class="{ 'fade-out': hoveredVideo === video.id }"
					/>

					<iframe
						v-if="hoveredVideo === video.id && !modalVideo"
						:src="`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${video.id}`"
						class="video-preview"
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen
					></iframe>

					<div class="play-overlay">▶</div>
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
						<button
							class="like-btn-small"
							:class="{
								liked: videoLikeStatus.get(video.id)?.isLiked,
							}"
							:disabled="youtubeAPI.loading.value"
							title="Like this video"
							@click.stop="handleLike(video.id)"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
								></path>
							</svg>
						</button>
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
						:src="`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`"
						class="modal-video-player"
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen
					></iframe>
				</div>

				<div class="modal-video-info">
					<div class="modal-actions">
						<button
							class="modal-like-btn"
							:class="{
								liked: videoLikeStatus.get(modalVideo.id)
									?.isLiked,
							}"
							:disabled="youtubeAPI.loading.value"
							@click="handleLike(modalVideo.id)"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
								></path>
							</svg>
							{{
								videoLikeStatus.get(modalVideo.id)?.isLiked
									? 'Liked'
									: 'Like'
							}}
						</button>
						<button
							class="modal-subscribe-btn"
							:class="{
								subscribed: subscriptionStatus.isSubscribed,
							}"
							:disabled="youtubeAPI.loading.value"
							@click="handleSubscribe"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
								/>
							</svg>
							{{
								subscriptionStatus.isSubscribed
									? 'Subscribed'
									: 'Subscribe'
							}}
						</button>
					</div>
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

		<!-- Sign-In Prompt Dialog -->
		<div
			v-if="showSignInDialog"
			class="dialog-overlay"
			@click="closeSignInDialog"
		>
			<div class="dialog" @click.stop>
				<button class="dialog-close" @click="closeSignInDialog">
					✕
				</button>
				<div class="dialog-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
						></path>
						<polyline points="10 17 15 12 10 7"></polyline>
						<line x1="15" y1="12" x2="3" y2="12"></line>
					</svg>
				</div>
				<h3 class="dialog-title">Sign in to YouTube</h3>
				<p class="dialog-message">
					Sign in with Google to see your like and subscription status
					across all videos. You can interact with content directly
					from this page!
				</p>
				<div class="dialog-actions">
					<button
						class="btn btn-secondary"
						@click="continueWithoutSignIn"
					>
						Continue Without Signing In
					</button>
					<button class="btn btn-primary" @click="signInToYouTube">
						Sign In with Google
					</button>
				</div>
				<label class="dialog-checkbox">
					<input v-model="dontShowAgain" type="checkbox" />
					<span>Don't show this again</span>
				</label>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useUserManagement } from '~/composables/useUserManagement'
import { useYouTubeAuth } from '~/composables/useYouTubeAuth'
import { useYouTubeAPI } from '~/composables/useYouTubeAPI'
import { storeToRefs } from 'pinia'

interface Video {
	id: string
	title: string
	description: string
	publishedAt: string
	thumbnail: string
}

const config = useRuntimeConfig()
const authStore = useAuthStore()
const { hasYouTubeAccess, youtubeAccessToken } = storeToRefs(authStore)

const youtubeAuth = useYouTubeAuth()
const youtubeAPI = useYouTubeAPI()

// Video data
const videos = ref<Video[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const channelId = config.public.YOUTUBE_CHANNEL_ID || 'UCPraC_i-mKFuwq17vUsrzWg'

// Preview states
const hoveredVideo = ref<string | null>(null)
const hoverTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

// Modal states
const modalVideo = ref<Video | null>(null)
const modalVisible = ref(false)
const modalExpanded = ref(false)
const expandingVideo = ref<string | null>(null)
const modalStyles = ref<Record<string, string>>({})

// Card refs
const cardRefs = new Map<string, HTMLElement>()

// Sign-in dialog states
const showSignInDialog = ref(false)
const dontShowAgain = ref(false)
const hasPromptedSignIn = ref(false)

// YouTube interaction states
const subscriptionStatus = reactive({
	isSubscribed: false,
	subscriptionId: undefined as string | undefined,
})
const videoLikeStatus = ref(
	new Map<string, { isLiked: boolean; rating: string }>()
)

// Fetch videos from YouTube RSS feed
const fetchVideos = async () => {
	loading.value = true
	error.value = null

	try {
		const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
		const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`

		const response = await fetch(proxyUrl)
		const data = (await response.json()) as { contents: string }

		if (!response.ok) {
			throw new Error('Failed to fetch videos')
		}

		const parser = new DOMParser()
		const xmlDoc = parser.parseFromString(data.contents, 'text/xml')
		const entries = xmlDoc.querySelectorAll('entry')

		videos.value = Array.from(entries).map((entry) => {
			const videoId = entry.querySelector('videoId')?.textContent || ''
			const title = entry.querySelector('title')?.textContent || ''
			const description =
				entry.querySelector('media\\:description, description')
					?.textContent || ''
			const publishedAt =
				entry.querySelector('published')?.textContent || ''
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

		// If user is signed in, fetch like statuses
		if (hasYouTubeAccess.value && youtubeAccessToken.value) {
			await fetchAllLikeStatuses()
		}
	} catch (err) {
		const fetchError = err as Error
		error.value = fetchError.message
		console.error('Error fetching YouTube videos:', fetchError)
	} finally {
		loading.value = false
	}
}

// Fetch subscription status
const fetchSubscriptionStatus = async () => {
	const token = youtubeAccessToken.value
	if (!token) return

	const status = await youtubeAPI.checkSubscription(channelId, token)
	subscriptionStatus.isSubscribed = status.isSubscribed
	subscriptionStatus.subscriptionId = status.subscriptionId
}

// Fetch all like statuses for loaded videos
const fetchAllLikeStatuses = async () => {
	const token = youtubeAccessToken.value
	if (!token || videos.value.length === 0) return

	const videoIds = videos.value.map((v) => v.id)
	const statuses = await youtubeAPI.batchCheckLikes(videoIds, token)
	videoLikeStatus.value = statuses
}

// Handle subscribe/unsubscribe
const handleSubscribe = async () => {
	// Check if user has YouTube access
	if (!hasYouTubeAccess.value) {
		// Check if user previously chose to skip sign-in
		const skipSignIn =
			typeof window !== 'undefined'
				? localStorage.getItem('youtube_skip_signin') === 'true'
				: false

		if (skipSignIn) {
			// Open YouTube subscribe link directly
			const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`
			window.open(subscribeUrl, '_blank')
			return
		}

		showSignInDialog.value = true
		return
	}

	const token = youtubeAccessToken.value
	if (!token) return

	if (subscriptionStatus.isSubscribed && subscriptionStatus.subscriptionId) {
		// Unsubscribe
		const success = await youtubeAPI.unsubscribeFromChannel(
			subscriptionStatus.subscriptionId,
			token
		)
		if (success) {
			subscriptionStatus.isSubscribed = false
			subscriptionStatus.subscriptionId = undefined
		}
	} else {
		// Subscribe
		const success = await youtubeAPI.subscribeToChannel(channelId, token)
		if (success) {
			await fetchSubscriptionStatus()
		}
	}
}

// Handle like/unlike
const handleLike = async (videoId: string) => {
	// Check if user has YouTube access
	if (!hasYouTubeAccess.value) {
		// Check if user previously chose to skip sign-in
		const skipSignIn =
			typeof window !== 'undefined'
				? localStorage.getItem('youtube_skip_signin') === 'true'
				: false

		if (skipSignIn) {
			// Open video on YouTube
			const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
			window.open(videoUrl, '_blank')
			return
		}

		showSignInDialog.value = true
		return
	}

	const token = youtubeAccessToken.value
	if (!token) return

	const currentStatus = videoLikeStatus.value.get(videoId)

	if (currentStatus?.isLiked) {
		// Unlike
		const success = await youtubeAPI.unlikeVideo(videoId, token)
		if (success) {
			videoLikeStatus.value.set(videoId, {
				isLiked: false,
				rating: 'none',
			})
		}
	} else {
		// Like
		const success = await youtubeAPI.likeVideo(videoId, token)
		if (success) {
			videoLikeStatus.value.set(videoId, {
				isLiked: true,
				rating: 'like',
			})
		}
	}
}

// Sign in with YouTube
const signInToYouTube = async () => {
	if (dontShowAgain.value) {
		localStorage.setItem('ytSignInPromptDismissed', 'true')
		hasPromptedSignIn.value = true
	}

	closeSignInDialog()

	// Use the composable's sign-in method (triggers OAuth popup)
	const success = await youtubeAuth.signInWithYouTube()

	if (success && youtubeAuth.state.value.accessToken) {
		console.log('Sign-in successful, fetching YouTube data...')
		authStore.setYouTubeAccess(youtubeAuth.state.value.accessToken)

		// Create/update user profile in Firestore
		if (youtubeAuth.state.value.user) {
			const userMgmt = useUserManagement()
			await userMgmt.upsertUserProfile(
				youtubeAuth.state.value.user,
				false
			)
			console.log('User profile updated in Firestore')
		}

		// Fetch subscription status
		console.log('Fetching subscription status...')
		await fetchSubscriptionStatus()
		console.log('Subscription status:', subscriptionStatus)

		// Fetch like statuses for all videos
		console.log(
			'Fetching like statuses for',
			videos.value.length,
			'videos...'
		)
		await fetchAllLikeStatuses()
		console.log('Like statuses:', videoLikeStatus.value)
	} else {
		console.error('Sign-in failed or no access token')
	}
}

// Continue without signing in
const continueWithoutSignIn = () => {
	if (dontShowAgain.value) {
		localStorage.setItem('ytSignInPromptDismissed', 'true')
		hasPromptedSignIn.value = true
	}
	closeSignInDialog()

	// Store that user chose to continue without signing in
	// This allows direct YouTube links to work
	if (typeof window !== 'undefined') {
		localStorage.setItem('youtube_skip_signin', 'true')
	}
}

// Close sign-in dialog
const closeSignInDialog = () => {
	showSignInDialog.value = false
	dontShowAgain.value = false
}

// Preview functions
const startPreview = (videoId: string) => {
	if (modalVideo.value) return

	hoverTimeout.value = setTimeout(() => {
		hoveredVideo.value = videoId
	}, 300)
}

const stopPreview = () => {
	if (hoverTimeout.value) {
		clearTimeout(hoverTimeout.value)
		hoverTimeout.value = null
	}
	hoveredVideo.value = null
}

// Modal functions
const setCardRef = (
	el: Element | ComponentPublicInstance | null,
	videoId: string
) => {
	if (el) {
		cardRefs.set(videoId, el as HTMLElement)
	}
}

const openVideoModal = (video: Video) => {
	stopPreview()

	const cardElement = cardRefs.get(video.id)
	if (!cardElement) return

	const cardRect = cardElement.getBoundingClientRect()
	expandingVideo.value = video.id

	modalStyles.value = {
		position: 'fixed',
		top: `${cardRect.top}px`,
		left: `${cardRect.left}px`,
		width: `${cardRect.width}px`,
		height: `${cardRect.height}px`,
		borderRadius: '12px',
	}

	modalVideo.value = video
	modalVisible.value = true
	document.body.style.overflow = 'hidden'

	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			expandModal()
		})
	})
}

const expandModal = () => {
	const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight
	const modalWidth = Math.min(windowWidth * 0.9, 1200)
	const modalHeight = Math.min(windowHeight * 0.9, 800)

	modalStyles.value = {
		position: 'fixed',
		top: `${(windowHeight - modalHeight) / 2}px`,
		left: `${(windowWidth - modalWidth) / 2}px`,
		width: `${modalWidth}px`,
		height: `${modalHeight}px`,
		borderRadius: '16px',
	}

	modalExpanded.value = true
}

const closeVideoModal = () => {
	const cardElement = cardRefs.get(modalVideo.value?.id || '')

	if (cardElement) {
		const cardRect = cardElement.getBoundingClientRect()
		modalStyles.value = {
			position: 'fixed',
			top: `${cardRect.top}px`,
			left: `${cardRect.left}px`,
			width: `${cardRect.width}px`,
			height: `${cardRect.height}px`,
			borderRadius: '12px',
		}
	}

	modalExpanded.value = false

	setTimeout(() => {
		modalVideo.value = null
		modalVisible.value = false
		expandingVideo.value = null
		modalStyles.value = {}
		document.body.style.overflow = ''
	}, 400)
}

// Utility functions
const truncateDescription = (description: string, maxLength = 150): string => {
	if (!description) return ''
	return description.length > maxLength
		? description.substring(0, maxLength) + '...'
		: description
}

const formatDate = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}

// Initialize
onMounted(async () => {
	await fetchVideos()
	hasPromptedSignIn.value =
		localStorage.getItem('ytSignInPromptDismissed') === 'true'

	// Initialize YouTube auth
	youtubeAuth.initializeYouTubeAuth()

	// If user already has YouTube access, fetch subscription status
	if (hasYouTubeAccess.value && youtubeAccessToken.value) {
		await fetchSubscriptionStatus()
	}

	// Watch for auth changes to clear YouTube data on logout
	watch(
		() => authStore.user,
		(newUser) => {
			if (!newUser) {
				// User logged out - clear YouTube data
				console.log('User logged out, clearing YouTube data')
				subscriptionStatus.isSubscribed = false
				subscriptionStatus.subscriptionId = undefined
				videoLikeStatus.value.clear()
			}
		}
	)
})
</script>

<style scoped>
/* Keep all your existing styles from the artifact... */
/* I'll just add the new state styles */
.subscribe-btn.subscribed,
.modal-subscribe-btn.subscribed {
	background: #909090;
}

.subscribe-btn.subscribed:hover,
.modal-subscribe-btn.subscribed:hover {
	background: #808080;
}

.like-btn-small.liked,
.modal-like-btn.liked {
	color: #065fd4;
}

.like-btn-small.liked svg,
.modal-like-btn.liked svg {
	fill: #065fd4;
	stroke: #065fd4;
}

.banner {
	width: 100%;
	height: 200px;
	border-radius: 16px;
	left: 0;
	top: 0;
	overflow: hidden;
	margin-bottom: 20px;
}

.banner img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
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
	line-clamp: 2;
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
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.like-btn-small {
	background: none;
	border: none;
	color: #606060;
	cursor: pointer;
	padding: 4px 8px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	gap: 4px;
	transition: all 0.2s ease;
}

.like-btn-small:hover {
	background: #f0f0f0;
	color: #065fd4;
}

.like-btn-small svg {
	flex-shrink: 0;
}

/* Subscribe Section */
.subscribe-section {
	display: flex;
	justify-content: center;
	margin: 24px 0;
}

.subscribe-btn {
	background: #cc0000;
	color: white;
	border: none;
	padding: 12px 24px;
	border-radius: 24px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: all 0.2s ease;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subscribe-btn:hover {
	background: #b00000;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	transform: translateY(-1px);
}

.subscribe-btn svg {
	flex-shrink: 0;
}

/* Modal Actions */
.modal-actions {
	display: flex;
	gap: 12px;
	margin-bottom: 16px;
}

.modal-like-btn,
.modal-subscribe-btn {
	flex: 1;
	border: none;
	padding: 12px 20px;
	border-radius: 24px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	transition: all 0.2s ease;
}

.modal-like-btn {
	background: #f0f0f0;
	color: #606060;
}

.modal-like-btn:hover {
	background: #e0e0e0;
	color: #065fd4;
}

.modal-subscribe-btn {
	background: #cc0000;
	color: white;
}

.modal-subscribe-btn:hover {
	background: #b00000;
}

.modal-like-btn svg,
.modal-subscribe-btn svg {
	flex-shrink: 0;
}

/* Dialog Styles */
.dialog-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4px);
	z-index: 2000;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.dialog {
	background: white;
	border-radius: 16px;
	padding: 32px;
	max-width: 440px;
	width: 90%;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	position: relative;
	animation: slideUp 0.3s ease;
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.dialog-close {
	position: absolute;
	top: 16px;
	right: 16px;
	background: none;
	border: none;
	font-size: 24px;
	color: #606060;
	cursor: pointer;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background 0.2s ease;
}

.dialog-close:hover {
	background: #f0f0f0;
}

.dialog-icon {
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
	color: #065fd4;
}

.dialog-title {
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	margin: 0 0 12px 0;
	color: #333;
}

.dialog-message {
	font-size: 15px;
	line-height: 1.5;
	text-align: center;
	color: #606060;
	margin: 0 0 24px 0;
}

.dialog-actions {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 16px;
}

.btn {
	padding: 12px 24px;
	border-radius: 24px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	transition: all 0.2s ease;
	width: 100%;
}

.btn-primary {
	background: #065fd4;
	color: white;
}

.btn-primary:hover {
	background: #0553c2;
}

.btn-secondary {
	background: #f0f0f0;
	color: #606060;
}

.btn-secondary:hover {
	background: #e0e0e0;
}

.dialog-checkbox {
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	font-size: 14px;
	color: #606060;
	justify-content: center;
}

.dialog-checkbox input[type='checkbox'] {
	cursor: pointer;
	width: 16px;
	height: 16px;
}

.dialog-checkbox span {
	user-select: none;
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

	.modal-actions {
		flex-direction: column;
	}
}
</style>
