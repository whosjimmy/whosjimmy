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
      cover: [
        "img/stuff/cars/117-1768_IMG.JPG",
      ],
      images: [
        "img/stuff/cars/117-1767_IMG.JPG",
        "img/stuff/cars/105-0549_IMG.JPG",
        "img/stuff/cars/a4 324.JPG",
        "img/stuff/cars/IMG_2562.JPG"
      ],
      info: [
        "Cars",
        "Neat cars come across and/or owned."
      ]
    }
  },
  components: {
    appGallery: Gallery
  }
}
</script>
