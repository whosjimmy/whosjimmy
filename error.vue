<template>
	<div class="text-center my-0 page">
		<app-header />
		<div class="body">
			<img
				src="\film\body_parts\vlcsnap-2010-10-12-10h36m24s49.png"
				alt="Error Image"
			/>
			<h2>Error: {{ error?.statusCode }}</h2>
			<button class="btn btn-primary" @click="handleError">
				Take me home
			</button>
		</div>
		<app-footer />
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
const props: any = defineProps({
	error: Object as () => NuxtError,
})
const { $config } = useNuxtApp()

useHead({
	title: props?.error?.statusCode.toString() || 'Error',
})
const handleError = () => {
	useHead({
		title: $config.public.SITE_TITLE,
	})
	clearError({ redirect: '/' })
}
</script>

<script lang="ts">
import Header from '~/components/Header.vue'
import Footer from './components/Footer.vue'
export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
	},
	head() {
		return {
			title: 'Error',
		}
	},
}
</script>

<style lang="scss" scoped>
img {
	max-width: 50%;
	height: auto;
}
</style>
