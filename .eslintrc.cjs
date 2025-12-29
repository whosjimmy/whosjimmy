module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended',
		'@nuxt/eslint-config',
	],
	plugins: [],
	rules: {
		// Your existing rules...
		'vue/multi-word-component-names': 'off',
		'vue/attributes-order': [
			'warn',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: false,
			},
		],
	},
	// This tells ESLint about Nuxt auto-imports
	globals: {
		useYouTubeAuth: 'readonly',
		useYouTubeAPI: 'readonly',
		useNuxtApp: 'readonly',
		useRuntimeConfig: 'readonly',
		useRouter: 'readonly',
		onMounted: 'readonly',
		ref: 'readonly',
		reactive: 'readonly',
		computed: 'readonly',
		watch: 'readonly',
		// Add any other Nuxt/Vue auto-imports you use
	},
}
