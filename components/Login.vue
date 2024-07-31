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
				<p v-if="authStore.getAuthError">
					{{ authStore.getAuthError }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
	await authStore.signIn(email.value, password.value)
}
</script>
