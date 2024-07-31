<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>Admin</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<nuxt-link to="/Admin/Portfolio/Film">Film</nuxt-link>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<button @click="handleSignOut">Sign Out</button>
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
import { useAuthStore } from '~/stores/auth'

export default {
	// middleware: 'auth', // TODO: nuxt3 auth seems to need to use setup but it won't generate with it
	computed: {
		...mapState(useAuthStore, {
			user: 'getUser',
			isAuthenticated: 'isAuthenticated',
		}),
	},
	methods: {
		...mapActions(useAuthStore, ['signOut']),
		handleSignOut() {
			this.signOut()
			this.$router.push('/login')
		},
	},
}
</script>

<style scoped>
.movie-details {
	margin-top: 20px;
}

.photo {
	margin-bottom: 10px;
}
.row {
	margin-top: 10px;
}
</style>
