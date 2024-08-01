<template lang="pug">
.container-fluid.col-lg-12
  .card.rounded.text-center
    .card-header
      | Portfolio - Movies and Television
    .card-body
      .row
        .col-lg-12(v-if="!sortedFilms?.length")
          .card
            .card-header
              | Loading
        .col-md-4.my-1(v-for="film in sortedFilms")
          .card.h-100
            .card-header.app-gallery(v-if="film?.Photos && film?.Photos?.length > 0")
              appGallery(:images="film.Photos", :cover="film.Image")
            .card-header(v-else)
              img.card-img-top(:src="film?.Image")
            .card-body
              h5.card-title.text-center(v-if="film.Years[0] || film.Years[1]")
                span(v-if="film.Years[0]") {{film.Years[0]}}
                span(v-if="film.Years[1]") &nbsp;- {{film.Years[1]}}
                br(v-if="film.Name")
                | {{film.Name}}
              p.card-text.text-center(v-if="film.Department")
                | ({{film.Department}})
                a.imdb(:href="film.Link" target="_blank" v-if="film.Link")
                  br
                  font-awesome-icon.mr-2.ml-2.fa-2x(height="20px", :icon="['fab', 'imdb']")
                //- br(v-if="film.Description")
                //- | ({{film.Description}})
</template>

<script>
import { mapState } from 'pinia'
import { useDepartmentStore } from '~/stores/departments'
import Gallery from '~/components/Gallery.vue'
import films from '~/public/film.json'
export default {
	data() {
		return {
			films,
			sortedFilms: [],
			departments: [],
		}
	},
	created() {
		this.processMovies()
	},
	computed: {
		...mapState(useDepartmentStore, ['departments', ['departments']]),
	},
	methods: {
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
	components: {
		appGallery: Gallery,
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
</style>
