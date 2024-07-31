// components/Login.vue
<template>
	<div class="container">
		<form @submit.prevent="handleSubmit">
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
					<button type="submit" @click="login">Sign In</button>
				</div>
			</div>
		</form>
		<div class="row">
			<div class="col-md-12">
				<p v-if="getAuthError">
					{{ getAuthError }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useAuthStore } from '~/stores/auth'
import { mapState, mapActions } from 'pinia'
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	computed: {
		...mapState(useAuthStore, ['getAuthError']),
	},
	methods: {
		...mapActions(useAuthStore, ['signIn']),
		async handleSubmit() {
			await this.signIn(this.email, this.password).then(() => {
				// this.$router.push({ name: 'Admin' })
			})
		},
	},
}
</script>
