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
      cover: "img/truck/feb6 2011 254.JPG",
      images: [
        "img/truck/109-0951_IMG.JPG",
        "img/truck/112-1209_IMG.JPG",
        "img/truck/116-1652_IMG-1.jpg",
        "img/truck/IMG_0394.JPG",
        "img/truck/IMG_0400.JPG",
        "img/truck/IMG_0411.JPG",
        "img/truck/IMG_0418.JPG"
      ],
      info: [
        "Set truck on location devour set north vancouver"
      ]
    }
  },
  components: {
    appGallery: Gallery
  }
}
</script>
