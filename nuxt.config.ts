export default defineNuxtConfig({
	// ssr: false,
	// target: 'static', // default is 'server'
	runtimeConfig: {
		public: {
			FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
			FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
			FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
			FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
			FIREBASE_MESSAGING_SENDER_ID:
				process.env.FIREBASE_MESSAGING_SENDER_ID,
			FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
			FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
			GOOGLE_TAG_MANAGER_KEY: process.env.GOOGLE_TAG_MANAGER_KEY,
			GOOGLE_TAG_MANAGER_ENABLED: process.env.GOOGLE_TAG_MANAGER_ENABLED,
			GOOGLE_TAG_MANAGER_DEBUG: process.env.GOOGLE_TAG_MANAGER_DEBUG,
			SITE_TITLE: process.env.SITE_TITLE,
		},
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		/*
		 ** Headers of the page
		 */
		head: {
			title: process.env.SITE_TITLE || "Who's Jimmy",
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					hid: 'description',
					name: 'description',
					content: process.env.npm_package_description || '',
				},
			],
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'stylesheet',
					href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
					integrity:
						'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
					crossorigin: 'anonymous',
				},
			],
			script: [
				{
					src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
					integrity:
						'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
					crossorigin: 'anonymous',
				},
				{
					src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
					integrity:
						'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49',
					crossorigin: 'anonymous',
				},
			],
		},
	},
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'~/assets/styles/main.scss',
	],
	/*
	 ** Plugins to load before mounting the App
	 */

	plugins: ['~/plugins/firebase.js'],
	/*
	 ** Nuxt.js modules
	 */
	// modules: ['@pinia/nuxt'],
	/*
	 ** Build configuration
	 */
	auth: {
		middleware: ['~/middleware/auth.js'],
		cookie: {
			prefix: 'auth.',
		},
		localStorage: {
			prefix: 'auth.',
		},
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					required: true,
					type: 'Bearer',
				},
				user: {
					property: 'user',
					autoFetch: true,
				},
			},
		},
	},
	build: { transpile: ['@fortawesome/vue-fontawesome'] },
	compatibilityDate: '2024-07-22',
})
