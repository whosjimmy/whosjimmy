import { createGtm } from '@gtm-support/vue-gtm'
export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig().public
	const trackingCookies = useCookie('trackingCookies')

	if (trackingCookies.value) {
		console.log('trackingCookies', trackingCookies.value)
	}

	nuxtApp.vueApp.use(
		createGtm({
			id: config.GOOGLE_TAG_MANAGER_KEY,
			defer: false,
			compatibility: false,
			// nonce: '', //TODO: add nonce
			enabled:
				config.GOOGLE_TAG_MANAGER_ENABLED ||
				trackingCookies.value ||
				false,
			debug: config.GOOGLE_TAG_MANAGER_DEBUG || false,
			loadScript: true,
			vueRouter: useRouter(),
			trackOnNextTick: false,
		})
	)
})
