<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<input v-model="email" placeholder="Email" />
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<input
					v-model="password"
					type="password"
					placeholder="Password"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<button @click="login">Sign In</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<p v-if="authError" class="error">{{ authError }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '~/store/auth'

export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},
	computed: {
		...mapState(useAuthStore, {
			user: 'getUser',
			isAuthenticated: 'isAuthenticated',
			authError: 'getAuthError',
		}),
	},
	methods: {
		...mapActions(useAuthStore, ['signIn']),
		async login() {
			try {
				await this.signIn({
					email: this.email,
					password: this.password,
				})
				// Redirect after successful sign-in
				this.$router.push('/admin')
			} catch (error) {
				console.error('Sign-in error:', error)
			}
		},
	},
	mounted() {
		if (this.isAuthenticated) {
			this.$router.push('/admin')
		}
	},
}
</script>

<style scoped>
.row {
	margin-top: 10px;
}
.error {
	color: red;
}
</style>
