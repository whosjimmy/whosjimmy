<template lang="pug">
.container-fluid 
  .col-md-12.row
    .col-md-4(v-for="page in pages")
      .card.floating-card
        .card-header
          nuxt-link(
            tag="img",
            activeClass="active",
            :to="page.link",
            width="100%"
          )
            img(:src="page.image", :alt="page.alt" width="100%")
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
					link: '/Portfolio/Clocks',
					image: '/clocks/thumbnail/clocks.jpg',
					alt: 'Artisan Clocks',
					title: 'Artisan Clocks',
					name: 'Artisan Clocks',
				},
				{
					link: '/Portfolio/Machinery',
					image: 'machinery/thumbnail/may07all 106.jpg',
					alt: 'Custom Machinery',
					title: 'Custom Machinery',
					name: 'Custom Machinery',
				},
				{
					link: '/Portfolio/Celebrities',
					image: 'thumbnail/IMG_0045-1.jpg',
					alt: 'Jimmy with Celebrities',
					title: 'Jimmy with Celebrities',
					name: 'Jimmy with Celebrities',
				},
				{
					link: '/Portfolio/Truck',
					image: 'thumbnail/truck_mini.jpg',
					alt: 'Set Truck',
					title: 'Set Truck',
					name: "Jimmy's Set Truck",
				},
				{
					link: '/Portfolio/Film',
					image: '/film/thumbnail/x-men_the_last_stand.jpg',
					alt: 'Movies and Television',
					title: 'Movies and Television',
					name: 'Movies and Television',
				},
			],
		}
	},
}
</script>

<style scoped>
.card {
	margin-bottom: 10px;
}
</style>
