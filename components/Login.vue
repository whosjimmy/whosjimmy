// components/Login.vue
<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<input v-model="email" type="email" placeholder="Email" />
			<input v-model="password" type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
		<p v-if="authStore.getAuthError">{{ authStore.getAuthError }}</p>
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
