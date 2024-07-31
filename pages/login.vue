// pages/index.vue
<template>
	<div>
		<Login v-if="!authStore.isAuthenticated" />
		<div v-else>
			<p>Welcome, {{ authStore.getUser.email }}</p>
			<button @click="authStore.signOut">Logout</button>
		</div>
	</div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
import Login from '~/components/Login.vue'

const authStore = useAuthStore()
</script>
