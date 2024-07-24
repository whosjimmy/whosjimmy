<template lang="pug">
.container-fluid
  .col-lg-12.text-center
    appGallery(:cover="cover" :images="images" :info="info")
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
	data() {
		return {
			cover: '/truck/feb6 2011 254.JPG',
			images: [
				'/truck/109-0951_IMG.JPG',
				'/truck/112-1209_IMG.JPG',
				'/truck/116-1652_IMG-1.jpg',
				'/truck/IMG_0394.JPG',
				'/truck/IMG_0400.JPG',
				'/truck/IMG_0411.JPG',
				'/truck/IMG_0418.JPG',
			],
			info: ['Set truck on location devour set north vancouver'],
		}
	},
	components: {
		appGallery: Gallery,
	},
}
</script>
