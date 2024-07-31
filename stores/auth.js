// stores/auth.js
import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
		authError: null,
	}),
	actions: {
		async signIn(email, password) {
			const { $auth } = useNuxtApp()
			try {
				const userCredential = await signInWithEmailAndPassword(
					$auth,
					email,
					password
				)
				this.user = userCredential.user
				this.authError = null
			} catch (error) {
				this.authError = error.message
			}
		},
		async signOut() {
			const { $auth } = useNuxtApp()
			try {
				await signOut($auth)
				this.user = null
				this.authError = null
			} catch (error) {
				this.authError = error.message
			}
		},
		setUser(user) {
			this.user = user
		},
		setAuthError(error) {
			this.authError = error
		},
		initializeAuth() {
			const { $auth } = useNuxtApp()
			onAuthStateChanged($auth, (user) => {
				this.user = user || null
			})
		},
	},
	getters: {
		isAuthenticated: (state) => !!state.user,
		getUser: (state) => state.user,
		getAuthError: (state) => state.authError,
	},
	persist: {
		enabled: true,
	},
})
