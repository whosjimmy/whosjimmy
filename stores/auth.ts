// stores/auth.ts
import { defineStore } from 'pinia'
import { useNuxtApp, useRouter } from '#app'
import type { NuxtApp } from '#app'
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	type User,
	type Auth,
} from 'firebase/auth'
import { useUserManagement } from '~/composables/useUserManagement'

interface AuthState {
	user: User | null
	authError: string | null
	loading: boolean
	youtubeAccessToken: string | null
	hasYouTubeAccess: boolean
	isAdmin: boolean
}

interface FirebaseError extends Error {
	code?: string
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		user: null,
		authError: null,
		loading: true,
		youtubeAccessToken: null,
		hasYouTubeAccess: false,
		isAdmin: false,
	}),
	actions: {
		async signIn(email: string, password: string) {
			const { $auth } = useNuxtApp() as NuxtApp & { $auth: Auth }
			const router = useRouter()
			const userManagement = useUserManagement()

			try {
				const userCredential = await signInWithEmailAndPassword(
					$auth,
					email,
					password
				)
				this.user = userCredential.user
				this.authError = null

				// Update user profile in Firestore
				await userManagement.upsertUserProfile(
					userCredential.user,
					false
				)

				// Check if user is admin
				this.isAdmin = await userManagement.isUserAdmin(
					userCredential.user.uid
				)

				router.push({ name: 'Admin' })
			} catch (error) {
				const firebaseError = error as FirebaseError
				this.authError = firebaseError.message
			}
		},
		async signOut() {
			const { $auth } = useNuxtApp() as NuxtApp & { $auth: Auth }
			try {
				await signOut($auth)
				this.user = null
				this.authError = null
				this.isAdmin = false
				this.clearYouTubeAccess()
			} catch (error) {
				const firebaseError = error as FirebaseError
				this.authError = firebaseError.message
			}
		},
		setUser(user: User | null) {
			this.user = user
		},
		setAuthError(error: string | null) {
			this.authError = error
		},
		initializeAuth() {
			const { $auth } = useNuxtApp() as NuxtApp & { $auth: Auth }
			const userManagement = useUserManagement()

			onAuthStateChanged($auth, async (user) => {
				this.user = user || null
				this.loading = false

				// Check for YouTube access on auth state change
				if (user) {
					this.checkYouTubeAccess()
					// Check admin status
					this.isAdmin = await userManagement.isUserAdmin(user.uid)
				} else {
					this.isAdmin = false
				}
			})
		},
		setLoading(loading: boolean) {
			this.loading = loading
		},
		setYouTubeAccess(accessToken: string) {
			this.youtubeAccessToken = accessToken
			this.hasYouTubeAccess = true

			if (typeof window !== 'undefined') {
				localStorage.setItem('youtube_access_token', accessToken)
			}
		},
		clearYouTubeAccess() {
			this.youtubeAccessToken = null
			this.hasYouTubeAccess = false

			if (typeof window !== 'undefined') {
				localStorage.removeItem('youtube_access_token')
				localStorage.removeItem('youtube_user_id')
			}
		},
		checkYouTubeAccess() {
			if (typeof window !== 'undefined') {
				const token = localStorage.getItem('youtube_access_token')
				if (token) {
					this.youtubeAccessToken = token
					this.hasYouTubeAccess = true
				}
			}
		},
	},
	getters: {
		isAuthenticated: (state): boolean => !!state.user,
		getUser: (state): User | null => state.user,
		getAuthError: (state): string | null => state.authError,
		getLoading: (state): boolean => state.loading,
		getYouTubeAccessToken: (state): string | null =>
			state.youtubeAccessToken,
		hasYouTubeAuth: (state): boolean => state.hasYouTubeAccess,
		getIsAdmin: (state): boolean => state.isAdmin,
	},
})
