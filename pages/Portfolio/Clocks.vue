<template lang="pug">
.container-fluid.col-lg-12
  .card.rounded.text-center
    .card-header
      | Portfolio - Clocks
    .card-body
      .row
        .col-lg-6.text-center
          <iframe src="//www.youtube.com/embed/ExYMwsZ77A4" frameborder="0" allowfullscreen></iframe>
        .col-lg-6.text-center
          <iframe src="//www.youtube.com/embed/KpDggiBvs3k" frameborder="0" allowfullscreen></iframe>    
      .col-md-12.row
        .col-md-4(v-for="clock in clocks")
          appGallery(:images="clock.images", :cover="clock.images[0]",
                              :info="[clock.name,clock.info,clock.description]")
  .row.text-center
    .col-lg-12
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
			clocks: [
				{
					name: 'E1 "Angela"',
					info: '7 Diameter X 16H ~ inches',
					description:
						'First Edition Clock built from P3, 3 units made.',
					images: [
						'/clocks/e1/may07all 210-1.jpg',
						'/clocks/e1/may07all 220-1.jpg',
						'/clocks/e1/may07all 202-1.jpg',
						'/clocks/e1/may07all 057.jpg',
						'/clocks/e1/may07all 054.jpg',
						'/clocks/e1/129-2911_IMG-1.jpg',
					],
				},
				{
					name: 'Prototype 1',
					info: '18L X 11D X 40H ~ inches',
					description:
						'	First Prototype ever built. Made entirely from found good in the shop. electro-mechanical in function. Each light bulb is a different hour of the day. Minutes are neon lights.',
					images: [
						'/clocks/p1/may07all 235-1.jpg',
						'/clocks/p1/may07all 239-1.jpg',
						'/clocks/p1/may07all 245-1.jpg',
						'/clocks/p1/may07all 252-1.jpg',
						'/clocks/p1/may07all 253-1.jpg',
						'/clocks/p1/may07all 252-1.jpg',
					],
				},
				{
					name: 'Prototype 2',
					info: '14L X 8D X 22H ~ inches',
					description:
						"	Each vertical tube contains 12 balls (an hour) all balls dump out at 12 o'clock. Made from found goods.",
					images: [
						'/clocks/p2/127-2784_IMG-1.jpg',
						'/clocks/p2/IMG_2557-1.jpg',
						'/clocks/p2/IMG_0729.JPG',
					],
				},
				{
					name: 'Prototype 3',
					info: '7 Diameter X 16H ~ inches',
					description:
						'Spiral dome clock one ball every minute at the top of the spiral is released and spirals down and drops into a vortex at the bottom and eventually down the center of the vortex. This design hands off to E1. (Angela)',
					images: [
						'/clocks/p3/may07all 210-1.jpg',
						'/clocks/p3/may07all 054.jpg',
						'/clocks/p3/may07all 057.jpg',
						'/clocks/p3/may07all 220-1.jpg',
					],
				},
				{
					name: 'Prototype 4 "Little Jimmy"',
					info: '9L X 2D X 3H ~ inches',
					description:
						'	The first prototype of the inclined plane series. Using an oscillating clock movement. It takes 12 hours for the ball to go up the hill and its returned to the start. Graduations on the incline correspond with the ball to tell the time. This design hands to P5.',
					images: [
						'/clocks/p4/hiatus 411.JPG',
						'/clocks/p4/IMG_0650.JPG',
						'/clocks/p4/IMG_0668.JPG',
						'/clocks/p4/IMG_0700.JPG',
					],
				},
				{
					name: 'Prototype 5 "Sidewinder"',
					info: '7L X 3D X 3H ~ inches',
					description:
						'	This will be a future production clock. Made in wood and possibly clear acrylic, with plated metal parts.',
					images: [
						'/clocks/p5/IMG_9123.JPG',
						'/clocks/p5/Dec.21 2010 365.JPG',
						'/clocks/p5/Dec.21 2010 370.JPG',
						'/clocks/p5/IMG_9159.JPG',
						'/clocks/p5/IMG_9163.JPG',
					],
				},
				{
					name: 'Prototype 6 "Mag Link"',
					info: '6L X 3D X 3H ~ inches',
					description:
						'	A non-contact linkage between the clock motor and the screw, pushing a ball up hill over 12hrs.',
					images: [
						'/clocks/p6/Dec.21 2010 325-1.jpg',
						'/clocks/p6/hiatus 411.JPG',
					],
				},
				{
					name: 'Prototype 7 "Robo-Retro"',
					info: '9L X 10D X 12H ~ inches',
					description:
						'Rotary relays as decade counters driving lights for minutes and hours, all technology used is 1950 or older (retro). Built on my lunch breaks during the filming of Robocop.',
					images: [
						'/clocks/p7/vancouver2013a1 1841.JPG',
						'/clocks/p7/IMG_0509.JPG',
						'/clocks/p7/IMG_0511.JPG',
						'/clocks/p7/IMG_0516.JPG',
						'/clocks/p7/IMG_0519.JPG',
						'/clocks/p7/IMG_0617.JPG',
					],
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
.row {
	margin-top: 10px;
}

iframe {
	width: 100% !important;
	height: 330px !important;
}
</style>
