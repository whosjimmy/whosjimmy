<template lang="pug">
  .wrapper
    ul.list-group
      li.list-group-item
        | {{$route.params.index}}
</template>
<script>
export default {
	data() {
		return {
			film: [
				{
					id: 0,
					name: '',
					description: '',
					year: 0,
					field: '',
					image: '',
				},
			],
			films: [
				{
					id: 0,
					name: 'x-men',
					description: 'Claw maker',
					year: 2000,
					field: 'Art department',
					image: 'x-men.jpg',
				},
			],
		}
	},
	methods: {
		submit() {
			//set selected film
			this.$router.push('/Admin/Portal')
		},
	},
}
</script>
