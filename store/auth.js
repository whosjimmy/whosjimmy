// stores/auth.js
import { defineStore } from 'pinia'
import { useNuxtApp, useRouter } from '#app'
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
		authError: null,
		loading: true,
	}),
	actions: {
		setUser(user) {
			this.user = user
		},
		clearUser() {
			this.user = null
		},
		setAuthError(error) {
			this.authError = error
		},
		async signIn({ email, password }) {
			const { $auth } = useNuxtApp()
			const router = useRouter()
			try {
				const userCredential = await signInWithEmailAndPassword(
					$auth,
					email,
					password
				)
				this.setUser(userCredential.user)
				this.setAuthError(null)
				router.push('/admin')
			} catch (error) {
				console.error('Error signing in:', error)
				this.setAuthError(error.message)
			}
		},
		async signOut() {
			const { $auth } = useNuxtApp()
			try {
				await signOut($auth)
				this.clearUser()
			} catch (error) {
				console.error('Error signing out:', error)
			}
		},
		async fetchUser(user) {
			this.setUser(user)
		},
		async fetchUserData() {
			const { $firestore } = useNuxtApp()
			if (!this.user) return

			const userDoc = await $firestore
				.collection('users')
				.doc(this.user.uid)
				.get()
			if (userDoc.exists) {
				// console.log('User data:', userDoc.data())
			} else {
				// console.log('No such document!')
			}
		},
		async initializeAuth() {
			const { $auth } = useNuxtApp()
			return new Promise((resolve, reject) => {
				onAuthStateChanged($auth, (user) => {
					if (user) {
						this.fetchUser(user)
						resolve(user)
						this.loading = false
					} else {
						this.signOut()
						resolve(null)
						this.loading = false
					}
				})
			})
		},
	},
	getters: {
		getUser: (state) => state.user,
		getAuthError: (state) => state.authError,
		isAuthenticated: (state) => !!state.user,
	},
})
