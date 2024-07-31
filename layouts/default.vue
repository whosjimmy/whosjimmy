<template lang="pug">
.text-center.my-0
	app-header
	br
	.body
		NuxtPage
	br
	app-footer
</template>
<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
authStore.initializeAuth()
</script>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
	},
}
</script>

<style>
body {
	padding-top: 0px;
}
.floating-card {
	background-color: white;
	box-shadow:
		0 4px 8px rgba(0, 0, 0, 0.1),
		0 6px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for floating effect */
	transition:
		transform 0.2s,
		box-shadow 0.2s; /* Smooth transition for hover effect */
}

.floating-card:hover {
	transform: translateY(-10px); /* Slight lift on hover */
	box-shadow:
		0 8px 16px rgba(0, 0, 0, 0.2),
		0 12px 40px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}
</style>

<style scoped>
.body {
	max-width: 1000px;
	margin: auto;
}

.slide-enter-active {
	animation: slide-in 300ms ease-out forwards;
}
.slide-leave-active {
	animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in {
	from {
		transform: translateY(-30px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-out {
	from {
		transform: translateY(0);
		opacity: 1;
	}
	to {
		transform: translateY(-30px);
		opacity: 0;
	}
}
</style>
