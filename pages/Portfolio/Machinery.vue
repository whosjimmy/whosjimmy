<template lang="pug">
  .container-fluid.col-lg-12
    .card.rounded.text-center
      .card-header
        | Portfolio - Custom Machinery
      .card-body
        .col-lg-12.text-center
          appGallery(:images="images" :info="info" :cover="images[0]")
    .row.text-center
      .col-lg-12
        | Click on an image, to view image gallery.
</template>

<script>
import Gallery from '~/components/Gallery.vue'
export default {
	data() {
		return {
			images: ['machinery/may07all 106.jpg', 'machinery/orton1-314.jpg'],
			info: ['Shelby Cobra', 'Ignition sensor mount'],
		}
	},
	components: {
		appGallery: Gallery,
	},
}
</script>
