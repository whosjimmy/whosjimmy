export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID,
			firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
		},
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: "Who's Jimmy",
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
	plugins: [
		'~/plugins/firebase.js',
		'~/plugins/pinia.js',
		'~/plugins/fontawesome.js',
		'~/plugins/init.js',
	],
	router: {
		middleware: ['auth'],
	},
	auth: {
		// middleware: ['~/middleware/auth.js'],
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
