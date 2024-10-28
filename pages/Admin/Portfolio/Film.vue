<template>
	<div class="row">
		<div class="col-6">
			<Film />
		</div>
		<div class="col-6">
			<form @submit.prevent="submitForm">
				<!-- Department selection -->
				<div class="row">
					<div class="col-md-3">
						<label for="department-select"
							>Select Department:</label
						>
					</div>
					<div class="col-md-3">
						<select
							id="department-select"
							v-model="selectedDepartmentIndex"
						>
							<option
								v-for="(department, index) in departments"
								:key="index"
								:value="index"
							>
								{{ department.Department }}
							</option>
						</select>
					</div>

					<div class="col-md-3">
						<button
							class="btn btn-primary"
							type="button"
							@click="addDepartment"
						>
							Add Department
						</button>
					</div>

					<div class="col-md-3">
						<button
							v-if="selectedDepartmentIndex !== null"
							class="btn btn-danger"
							type="button"
							@click="deleteDepartment"
						>
							Delete Department
						</button>
					</div>
				</div>

				<!-- Movie selection -->
				<div v-if="selectedDepartmentIndex !== null" class="row">
					<div class="col-md-3">
						<label for="movie-select">Select Movie:</label>
					</div>

					<div class="col-md-3">
						<select id="movie-select" v-model="selectedMovieIndex">
							<option
								v-for="(
									movie, index
								) in selectedDepartment?.Movies"
								:key="index"
								:value="index"
							>
								{{ movie.Name }}
							</option>
						</select>
					</div>

					<div class="col-md-3">
						<button
							class="btn btn-primary"
							type="button"
							@click="addMovie"
						>
							Add Movie
						</button>
					</div>

					<div class="col-md-3">
						<button
							v-if="selectedMovieIndex !== null"
							class="btn btn-danger"
							type="button"
							@click="deleteMovie"
						>
							Delete Movie
						</button>
					</div>
				</div>

				<!-- Movie details -->
				<div
					v-if="selectedMovieIndex !== null && selectedMovie"
					class="movie-details"
				>
					<!-- Other movie details inputs -->
					<div class="row">
						<div class="col-md-4">
							<label>Name</label>
						</div>
						<div class="col-md-8">
							<input
								v-model="selectedMovie.Name"
								type="text"
								style="width: inherit"
							/>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<label>Link</label>
						</div>
						<div class="col-md-8">
							<input
								v-model="selectedMovie.Link"
								type="text"
								style="width: inherit"
							/>
						</div>
					</div>
					<!-- Cover Image -->
					<div class="row">
						<div class="col-md-4">
							<label>Cover Image</label>
						</div>
						<div class="col-md-8">
							<div class="row">
								<div class="col-2">
									<img
										:src="selectedMovie.Image"
										height="100"
									/>
								</div>
								<div class="col">
									<input type="file" @change="onFileChange" />
									<input
										v-model="selectedMovie.Image"
										type="text"
										style="width: inherit"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<label>Years</label>
						</div>
						<div class="col-md-8">
							<input
								v-model="selectedMovie.Years"
								type="text"
								style="width: inherit"
							/>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<label>Description</label>
						</div>
						<div class="col-md-8">
							<textarea
								v-model="selectedMovie.Description"
								style="width: inherit"
								rows="5"
							></textarea>
						</div>
					</div>

					<!-- Photos -->
					<div
						v-if="
							selectedMovie.Photos && selectedMovie.Photos.length
						"
					>
						<div class="row">
							<div class="col-md-12">
								<label>Photos</label>
							</div>
						</div>
						<div
							v-for="(photo, photoIndex) in selectedMovie.Photos"
							:key="photoIndex"
							class="photo row"
						>
							<div class="col-md-4">
								<img :src="photo" height="100" />
							</div>
							<div class="col-md-4">
								<input
									v-model="selectedMovie.Photos[photoIndex]"
									type="text"
									style="width: inherit"
								/>
							</div>
							<div class="col-md-4">
								<button
									class="btn btn-danger"
									type="button"
									@click="deletePhoto(photoIndex)"
								>
									Delete Photo
								</button>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<button type="button" @click="addPhoto">
								Add Photo
							</button>
							<input type="file" @change="onPhotoFileChange" />
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<button
								class="btn btn-primary"
								type="button"
								@click="saveMovie"
							>
								Save Movie
							</button>
						</div>
						<div class="col-md-6">
							<button
								class="btn btn-primary"
								type="button"
								@click="saveAllMovies"
							>
								Save All Departments
							</button>
						</div>
					</div>
				</div>
			</form>
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
import { useDepartmentStore } from '~/stores/departments'
import { uploadImage } from '~/utils/firebaseStorage'
import Film from '~/pages/Portfolio/Film'

export default {
	data() {
		return {
			selectedDepartmentIndex: null,
			selectedMovieIndex: null,
			coverImageFile: null,
			photoFile: null,
		}
	},
	computed: {
		...mapState(useDepartmentStore, ['departments']),
		selectedDepartment() {
			if (this.selectedDepartmentIndex !== null) {
				return this.departments[this.selectedDepartmentIndex]
			}
			return null
		},
		selectedMovie() {
			if (this.selectedDepartment && this.selectedMovieIndex !== null) {
				return this.selectedDepartment?.Movies[this.selectedMovieIndex]
			}
			return null
		},
	},
	watch: {
		selectedDepartmentIndex() {
			// Reset selected movie when department changes
			this.selectedMovieIndex = 0
		},
	},
	mounted() {
		this.selectedDepartmentIndex = 0
		this.selectedMovieIndex = 0
		// console.log('Mounted Film page', this.departments)
	},
	methods: {
		...mapActions(useDepartmentStore, [
			'saveDepartment',
			'saveAllDepartments',
		]),
		addDepartment() {
			const newDepartment = {
				Department: `New Department ${this.departments.length + 1}`,
				Movies: [],
			}
			this.$departmentStore.departments.push(newDepartment)
			this.selectedDepartmentIndex =
				this.$departmentStore.departments.length - 1
		},
		deleteDepartment() {
			if (this.selectedDepartmentIndex !== null) {
				this.$departmentStore.departments.splice(
					this.selectedDepartmentIndex,
					1
				)
				this.selectedDepartmentIndex = null
				this.selectedMovieIndex = null
			}
		},
		addMovie() {
			const newMovie = {
				Name: `New Movie ${this.selectedDepartment?.Movies.length + 1}`,
				Link: '',
				Image: '',
				Years: '',
				Description: '',
				Photos: [],
			}
			this.selectedDepartment?.Movies.push(newMovie)
			this.selectedMovieIndex = this.selectedDepartment?.Movies.length - 1
		},
		deleteMovie() {
			if (this.selectedMovieIndex !== null) {
				this.selectedDepartment?.Movies.splice(
					this.selectedMovieIndex,
					1
				)
				this.selectedMovieIndex = null
			}
		},
		addPhoto() {
			if (this.selectedMovie) {
				this.selectedMovie.Photos.push('')
			}
		},
		deletePhoto(photoIndex) {
			if (this.selectedMovie) {
				this.selectedMovie.Photos.splice(photoIndex, 1)
			}
		},
		async onFileChange(event) {
			const file = event.target.files[0]
			if (file) {
				try {
					const url = await uploadImage(
						file,
						`movies/${this.selectedDepartment.id}/${this.selectedMovieIndex}/coverImages/${file.name}`
					)
					this.selectedMovie.Image = url
				} catch (error) {
					console.error('Error uploading cover image:', error)
				}
			}
		},
		async onPhotoFileChange(event) {
			const file = event.target.files[0]
			if (file) {
				try {
					const url = await uploadImage(
						file,
						`movies/${this.selectedDepartment.id}/${this.selectedMovieIndex}/photos/${file.name}`
					)
					this.selectedMovie.Photos.push(url)
				} catch (error) {
					console.error('Error uploading photo:', error)
				}
			}
		},
		async saveMovie() {
			if (this.selectedDepartment && this.selectedMovie) {
				await this.saveDepartment({
					department: this.selectedDepartment,
				})
					.then(() => {
						alert('Movie saved successfully.')
					})
					.catch((error) => {
						console.error('Error saving movie:', error)
						alert('Failed to save movie.')
					})
			}
		},
		async saveAllMovies() {
			await this.saveAllDepartments()
				.then(() => {
					alert('All departments saved successfully.')
				})
				.catch((error) => {
					console.error('Error saving all departments:', error)
					alert('Failed to save all departments.')
				})
		},
	},
}
</script>

<style>
.row {
	margin-top: 10px;
}
</style>
