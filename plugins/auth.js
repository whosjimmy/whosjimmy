// plugins/auth.js
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { useAuthStore } from '~/store/auth' // Use the Pinia store

export default defineNuxtPlugin((nuxtApp) => {
	let app
	if (!getApps().length) {
		app = initializeApp(firebaseConfig)
	} else {
		app = getApp()
	}
	const auth = getAuth(app)

	const authStore = useAuthStore(nuxtApp.$pinia) // Pass Pinia instance

	if (auth) {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				authStore.fetchUser(user)
			} else {
				authStore.signOut()
			}
		})
	}
})
