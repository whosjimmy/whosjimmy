<template>
	<div class="container-fluid col-lg-12">
		<div class="card rounded text-center">
			<div class="card-header">Portfolio - Movies and Television</div>
			<div class="card-body">
				<div class="row">
					<div v-if="!sortedFilms?.length" class="col-lg-12">
						<div class="card">
							<div class="card-header">Loading</div>
						</div>
					</div>
					<div
						v-for="film in sortedFilms"
						:key="film.Name"
						class="col-md-4 my-1"
					>
						<div
							class="card h-100"
							:class="{
								'floating-card':
									film?.Photos &&
									film?.Photos?.length > 0 &&
									!activeGallery,
								'gallery-open': activeGallery === film.Name,
							}"
						>
							<div
								v-if="film?.Photos && film?.Photos?.length > 0"
								class="card-header app-gallery"
							>
								<appGallery
									:name="film.Name"
									:images="film.Photos"
									:cover="film.Image"
									@gallery-opened="onGalleryOpened"
									@gallery-closed="onGalleryClosed"
								/>
							</div>
							<div
								v-else
								class="card-header"
								@click="gtmGalleryViewedFailedEvent(film)"
							>
								<img class="card-img-top" :src="film?.Image" />
							</div>
							<div class="card-body">
								<h5
									v-if="film.Years[0] || film.Years[1]"
									class="card-title text-center"
								>
									<span v-if="film.Years[0]">{{
										film.Years[0]
									}}</span>
									<span v-if="film.Years[1]"
										>&nbsp;- {{ film.Years[1] }}</span
									>
									<br v-if="film.Name" />
									{{ film.Name }}
								</h5>
								<p
									v-if="film.Department"
									class="card-text text-center"
								>
									({{ film.Department }})
									<a
										v-if="film.Link"
										class="imdb"
										:href="film.Link"
										target="_blank"
									>
										<br />
										<font-awesome-icon
											class="mr-2 ml-2 fa-2x"
											height="20px"
											:icon="['fab', 'imdb']"
										/>
									</a>
									<!-- <br v-if="film.Description" /> -->
									<!-- ({{ film.Description }}) -->
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia'
import { useDepartmentStore } from '~/stores/departments'
import Gallery from '~/components/Gallery.vue'
import films from '~/public/film.json'
export default {
	components: {
		appGallery: Gallery,
	},
	data() {
		return {
			films,
			sortedFilms: [],
			activeGallery: null, // Track which gallery is currently open
		}
	},
	computed: {
		...mapState(useDepartmentStore, ['departments', ['departments']]),
	},
	created() {
		this.processMovies()
	},
	methods: {
		//TODO: confirm events captured on analytics
		gtmGalleryViewedFailedEvent(film) {
			this.$gtm.push({
				event: 'gallery-viewed-failed',
				film_name: film.Name,
				page_path: '/portfolio/film',
			})
		},
		onGalleryOpened(galleryName) {
			this.activeGallery = galleryName
		},
		onGalleryClosed() {
			this.activeGallery = null
		},
		processMovies() {
			let allMovies = []
			if (this.departments.length > 0) {
				this.departments.forEach((department) => {
					department.Movies.forEach((movie) => {
						allMovies.push({
							...movie,
							Department: department.Department,
							Short: department.Short,
						})
					})
				})
			} else {
				this.films.forEach((department) => {
					department.Movies.forEach((movie) => {
						allMovies.push({
							...movie,
							Department: department.Department,
							Short: department.Short,
						})
					})
				})
			}
			this.sortedFilms = allMovies.sort((a, b) => {
				return new Date(b.Years[0]) - new Date(a.Years[0])
			})
		},
	},
}
</script>

<style scoped>
.card {
	margin-bottom: 10px;
}
.card-body {
	min-height: 120px;
}
.imdb {
	color: #f5c518;
	/* svg {
    background-color: #000;
  } */
}
/* TODO: make all headers the same size */
/* .card-header {
  height: 100%;
} */
.app-gallery {
	cursor: pointer;
}

/* Floating card effect - only applied to cards with photos when no gallery is open */
.floating-card {
	background-color: white;
	box-shadow:
		0 4px 8px rgba(0, 0, 0, 0.1),
		0 6px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for floating effect */
	transition:
		transform 0.2s,
		box-shadow 0.2s; /* Smooth transition for hover effect */
}

.floating-card:hover {
	transform: translateY(-10px); /* Slight lift on hover */
	box-shadow:
		0 8px 16px rgba(0, 0, 0, 0.2),
		0 12px 40px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

/* Ensure no floating effect when gallery is open */
.gallery-open {
	transform: none !important;
	transition: none !important;
}

.gallery-open:hover {
	transform: none !important;
	box-shadow: initial !important;
}
</style>
