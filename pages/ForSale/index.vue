<template lang="pug">
.container-fluid 
  .col-md-12.row
    .col-md-4(v-for="page in pages")
      .card
        .card-header
          nuxt-link(
            tag="img",
            activeClass="active",
            :to="page.link",
            :src="require(`~/assets/${page.image}`)",
            width="100%"
          )
        .card-body
          h5.card-title.text-center
            | {{ page.name }}
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          link: "/Forsale/Clocks",
          image: "clocks/thumbnail/clocks.jpg",
          alt: "Artisan Clocks",
          title: "Artisan Clocks",
          name: "Artisan Clocks",
        },
        {
          link: "/Forsale/Memorabilia",
          image: "thumbnail/for_sale/movie_memorabilia.jpg",
          alt: "Movie Memorabilia",
          title: "Movie Memorabilia",
          name: "Movie Memorabilia",
        },
        {
          link: "/Forsale/Stuff",
          image: "Clear_light_bulb.gif",
          alt: "Stuff For Sale",
          title: "Stuff For Sale",
          name: "Stuff",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
</style>
