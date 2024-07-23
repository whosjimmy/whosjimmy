export default defineNuxtConfig({
	// ssr: false,
	// target: 'static', // default is 'server'

	/*
	 ** Headers of the page
	 */
	app: {
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

	/*
	 ** Customize the progress-bar color
	 */
	// loading: { color: '#FFFFFF' },

	/*
	 ** Global CSS
	 */
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'~/assets/styles/main.scss',
	],

	/*
	 ** Plugins to load before mounting the App
	 */

	/*
	 ** Nuxt.js modules
	 */
	// modules: ['@pinia/nuxt'],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		// extend(config, ctx) {},
	},

	compatibilityDate: '2024-07-22',
})
