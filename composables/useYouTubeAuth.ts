// composables/useYouTubeAuth.ts
import { ref } from 'vue'
import {
	GoogleAuthProvider,
	signInWithPopup,
	type User,
	type Auth,
} from 'firebase/auth'

export interface YouTubeAuthState {
	isSignedIn: boolean
	user: User | null
	accessToken: string | null
	loading: boolean
	error: string | null
}

interface GoogleAuthError extends Error {
	code?: string
}

export const useYouTubeAuth = () => {
	const nuxtApp = useNuxtApp()
	const $auth = nuxtApp.$auth as Auth

	const state = ref<YouTubeAuthState>({
		isSignedIn: false,
		user: null,
		accessToken: null,
		loading: false,
		error: null,
	})

	// YouTube OAuth scopes needed for subscription and like status
	const YOUTUBE_SCOPES = [
		'https://www.googleapis.com/auth/youtube.readonly',
		'https://www.googleapis.com/auth/youtube.force-ssl',
	]

	/**
	 * Sign in with Google and request YouTube permissions
	 */
	const signInWithYouTube = async (): Promise<boolean> => {
		state.value.loading = true
		state.value.error = null

		try {
			console.log('Starting YouTube sign-in...')
			const provider = new GoogleAuthProvider()

			// Add YouTube-specific scopes
			YOUTUBE_SCOPES.forEach((scope) => {
				provider.addScope(scope)
				console.log('Added scope:', scope)
			})

			// Force account selection to ensure proper consent
			provider.setCustomParameters({
				prompt: 'consent',
				access_type: 'offline',
			})

			console.log('Opening sign-in popup...')
			const result = await signInWithPopup($auth, provider)
			console.log('Sign-in successful:', result.user.email)

			const credential = GoogleAuthProvider.credentialFromResult(result)

			if (!credential?.accessToken) {
				throw new Error('Failed to obtain access token')
			}

			console.log('Access token obtained')
			state.value.isSignedIn = true
			state.value.user = result.user
			state.value.accessToken = credential.accessToken

			// Store access token in localStorage for persistence
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'youtube_access_token',
					credential.accessToken
				)
				localStorage.setItem('youtube_user_id', result.user.uid)
				console.log('Tokens stored in localStorage')
			}

			return true
		} catch (error) {
			const authError = error as GoogleAuthError
			console.error('YouTube sign-in error:', authError)
			console.error('Error code:', authError.code)
			console.error('Error message:', authError.message)
			state.value.error =
				authError.message || 'Failed to sign in with YouTube'
			return false
		} finally {
			state.value.loading = false
		}
	}

	/**
	 * Sign out and clear YouTube access
	 */
	const signOutYouTube = async (): Promise<void> => {
		state.value.isSignedIn = false
		state.value.user = null
		state.value.accessToken = null

		if (typeof window !== 'undefined') {
			localStorage.removeItem('youtube_access_token')
			localStorage.removeItem('youtube_user_id')
		}
	}

	/**
	 * Check if user has YouTube access token
	 */
	const hasYouTubeAccess = (): boolean => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('youtube_access_token')
			return !!token
		}
		return false
	}

	/**
	 * Get stored access token
	 */
	const getAccessToken = (): string | null => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('youtube_access_token')
		}
		return null
	}

	/**
	 * Initialize auth state from localStorage
	 */
	const initializeYouTubeAuth = (): void => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('youtube_access_token')
			const userId = localStorage.getItem('youtube_user_id')

			if (token && userId) {
				state.value.isSignedIn = true
				state.value.accessToken = token

				// Get user from Firebase auth
				const currentUser = $auth.currentUser
				if (currentUser && currentUser.uid === userId) {
					state.value.user = currentUser
				}
			}
		}
	}

	return {
		state,
		signInWithYouTube,
		signOutYouTube,
		hasYouTubeAccess,
		getAccessToken,
		initializeYouTubeAuth,
	}
}
