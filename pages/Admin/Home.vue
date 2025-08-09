<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>Admin</h1>
			</div>
			<div class="col-md-12">
				<input v-model="image" type="text" />
			</div>
			<div class="col-md-12">
				<img :src="general[0]?.cover" />
				<input
					type="file"
					@change="onPhotoFileChange($event, 'cover')"
				/>
				<!-- <button class="btn btn-primary" @click="saveImage">Save</button> -->
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth',
})
</script>
<script>
import { mapState, mapActions } from 'pinia'
import { useGeneralStore } from '~/stores/general'
import { uploadImage } from '~/utils/firebaseStorage'
export default {
	data() {
		return {
			image: 'https://picsum.photos/200/300',
		}
	},
	computed: {
		...mapState(useGeneralStore, ['general']),
	},
	mounted() {
		this.image =
			this.general[0].cover ||
			'https://firebasestorage.googleapis.com/v0/b/who-s-jimmy.appspot.com/o/general%2Fcover%2FJIMMY_CLAWS.jpg?alt=media&token=95eb5710-bb73-4de5-b635-d0e5a4937889'
	},
	methods: {
		...mapActions(useGeneralStore, ['saveGeneralItem']),
		// async saveImage() {
		// 	const generalStore = useGeneralStore()
		// 	// generalStore.saveImage(this.image)
		// 	const url = await uploadImage(
		// 		file,
		// 		`movies/${this.selectedDepartment.id}/${this.selectedMovieIndex}/coverImages/${file.name}`
		// 	)
		// },
		async onPhotoFileChange(event, type) {
			const file = event.target.files[0]
			if (file) {
				try {
					const url = await uploadImage(
						file,
						`general/${type}/${file.name}`
					)
					this.selectedMovie.Photos.push(url)
					this.saveGeneralItem('test')
				} catch (error) {
					console.error('Error uploading photo:', error)
				}
			}
		},
	},
}
</script>

<style></style>
