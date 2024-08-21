<template lang="pug">
.text-center.my-0.page
	app-header
	app-admin-header(v-if="$route.path.startsWith('/Admin')" class="pt-1")
	.body.mt-3(v-if="!getLoading")
		NuxtPage
	.body(v-else)
		app-loader(:loading="getLoading") 
	app-footer
	app-cookie-consent
</template>
<script setup>
import { useAuthStore } from '~/stores/auth'
import { useDepartmentStore } from '~/stores/departments'
import { useGeneralStore } from '~/stores/general'
import Loader from '~/components/Loader.vue'

const authStore = useAuthStore()
const departmentStore = useDepartmentStore() // Use the Pinia store
const generalStore = useGeneralStore()

Promise.all([
	departmentStore.fetchDepartments(),
	generalStore.fetchGeneral(),
	generalStore.fetchTrackingCookie(),
	authStore.initializeAuth(),
]).then(() => {
	authStore.setLoading(false)
})
</script>
<script>
import Header from '~/components/Header.vue'
import AdminHeader from '~/components/Admin/Header.vue'
import Footer from '~/components/Footer.vue'
import CookieConsent from '~/components/CookieConsent.vue'
import { mapState } from 'pinia'
export default {
	components: {
		appHeader: Header,
		appAdminHeader: AdminHeader,
		appFooter: Footer,
		appCookieConsent: CookieConsent,
		appLoader: Loader,
	},
	computed: {
		...mapState(useAuthStore, { getLoading: 'getLoading' }),
	},
	mounted() {
		console.log(this.$route.path)
	},
}
</script>

<style>
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
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.body {
	max-width: 1000px;
	margin: auto;
}
.page {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	min-width: 95vw;
}
</style>
