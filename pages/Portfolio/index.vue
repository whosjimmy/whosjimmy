<template lang="pug">
  .container-fluid 
    .col-md-12.row
      .col-md-4(v-for="page in pages")
        .card
          .card-header
            nuxt-link(tag="img" activeClass="active" :to="page.link" :src="page.image" width="100%")
          .card-body
            h5.card-title.text-center
              | {{page.name}}
</template>
<script>
export default {
  data() {
    return  {
      pages : [
        {
          link: "/Portfolio/Clocks",
          image: "http://whosjimmy.com/img/clocks/thumbnail/clocks.jpg",
          alt: "Artisan Clocks",
          title: "Artisan Clocks",
          name: "Artisan Clocks"
        },
        {
          link: "/Portfolio/Machinery",
          image: "http://whosjimmy.com/img/machinery/thumbnail/may07all%20106.jpg",
          alt: "Custom Machinery",
          title: "Custom Machinery",
          name: "Custom Machinery"
        },
        {
          link: "/Portfolio/Celebrities",
          image: "http://whosjimmy.com/img/thumbnail/IMG_0045-1.jpg",
          alt: "Jimmy with Celebrities",
          title: "Jimmy with Celebrities",
          name: "Jimmy with Celebrities"
        },
        {
          link: "/Portfolio/Truck",
          image: "http://whosjimmy.com/img/thumbnail/truck_mini.jpg",
          alt: "Set Truck",
          title: "Set Truck",
          name: "Jimmy's Set Truck"
        },
        {
          link: "/Portfolio/Film",
          image: "http://whosjimmy.com/img/film/thumbnail/x-men_the_last_stand.jpg",
          alt: "Movies and Television",
          title: "Movies and Television",
          name: "Movies and Television"
        },
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
  }
</style>
