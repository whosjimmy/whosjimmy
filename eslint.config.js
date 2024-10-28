import globals from 'globals'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
	{
		ignores: ['node_modules/**', '.nuxt/**', 'dist/**', '.output/**'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
				defineNuxtConfig: 'readonly',
				useRuntimeConfig: 'readonly',
				definePageMeta: 'readonly',
				defineNuxtPlugin: 'readonly',
				defineNuxtRouteMiddleware: 'readonly',
				useNuxtApp: 'readonly',
				useHead: 'readonly',
				useRouter: 'readonly',
				useCookie: 'readonly',
				navigateTo: 'readonly',
				clearError: 'readonly',
			},
			parser: vueParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: typescriptParser, // Parser for <script> tags
				extraFileExtensions: ['.vue'],
			},
		},
		files: ['**/*.{js,ts,vue}'],
		plugins: {
			'@typescript-eslint': typescript,
			vue: vue,
		},
		rules: {
			...js.configs.recommended.rules,
			...vue.configs['vue3-recommended'].rules,
			...typescript.configs.recommended.rules,
			// Customize some rules
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					args: 'after-used',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn', // Change to warning instead of error
			'vue/order-in-components': 'warn',
			'no-constant-condition': 'warn',
			'@typescript-eslint/no-unused-expressions': 'warn',
		},
	},
]
