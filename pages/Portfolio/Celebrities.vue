<template lang="pug">
.container-fluid
  .row
    .col-md-4(v-for="celeb in celebrities")
      .card
        appGallery(:cover="celeb.images[0]", :images="celeb.images" :info="[celeb.name, celeb.role, celeb.movie]")
  .row.text-center
    .col-lg-12
      .card
        | Click on an image, to view image gallery.

</template>
<script>
import Gallery from '~/components/Gallery.vue'
export default {
	components: {
		appGallery: Gallery,
	},
	data() {
		return {
			celebrities: [
				{
					name: 'Will Smith',
					role: 'Del Spooner',
					movie: 'I, Robot',
					images: ['/film/i_robot/111-1102_IMG.jpg'],
				},
				{
					name: 'Bill(William) Terezakis',
					role: 'Makeup Department',
					movie: 'I, Robot',
					images: ['/film/i_robot/110-1095_IMG.JPG'],
				},
				{
					name: 'Julie Andrews',
					role: 'Lily',
					movie: 'Tooth Fairy',
					images: ['/film/tooth_fairy/IMG_0045-1.jpg'],
				},
				{
					name: 'Dwayne Johnson',
					role: 'Derek',
					movie: 'Tooth Fairy',
					images: ['/film/tooth_fairy/IMG_2012.JPG'],
				},
				{
					name: 'Alan Cumming',
					role: 'Kurt Wagner / Nightcrawler',
					movie: 'X-Men 2',
					images: ['/film/x-men_2/103-0382_IMG.jpg'],
				},
				{
					name: 'Kelly Hu',
					role: 'Yuriko Oyama / Lady Deathstrike',
					movie: 'X-Men 2',
					images: [
						'/film/x-men_2/104-0493_IMG-1.jpg',
						'/film/x-men_2/104-0494_IMG.JPG',
						'/film/x-men_2/106-0611_IMG.JPG',
					],
				},
				{
					name: 'Hugh Jackman',
					role: 'Wolverine',
					movie: 'X-Men 2',
					images: ['/film/x-men_2/107-0729_IMG_2.jpg'],
				},
				{
					name: 'Bryan Singer',
					role: 'Director',
					movie: 'X-Men 2',
					images: ['/film/x-men_2/105-0588_IMG.JPG'],
				},
				{
					name: 'Ashley Bell',
					role: 'Trainee Assistant Director',
					movie: 'X-Men 2',
					images: ['/film/x-men_2/106-0677_IMG.JPG'],
				},
			],
		}
	},
}
</script>

<style scoped>
.hidden {
	visibility: hidden;
}
.card {
	margin-top: 20px;
}
</style>
