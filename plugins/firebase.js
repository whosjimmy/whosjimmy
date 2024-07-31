import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { initializeApp, getApps, getApp } from 'firebase/app'
import {
	getAuth,
	setPersistence,
	browserLocalPersistence,
	onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig().public

	const firebaseConfig = {
		apiKey: config.firebaseApiKey,
		authDomain: config.firebaseAuthDomain,
		projectId: config.firebaseProjectId,
		storageBucket: config.firebaseStorageBucket,
		messagingSenderId: config.firebaseMessagingSenderId,
		appId: config.firebaseAppId,
		measurementId: config.firebaseMeasurementId,
	}

	let app
	if (!getApps().length) {
		app = initializeApp(firebaseConfig)
	} else {
		app = getApp()
	}

	const auth = getAuth(app)
	setPersistence(auth, browserLocalPersistence)
		.then(() => {
			// console.log('Persistence set to browserLocalPersistence')
		})
		.catch((error) => {
			console.error('Error setting persistence:', error)
		})

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// console.log('User signed in:', user.email)
		} else {
			// console.log('No user signed in')
		}
	})

	const firestore = getFirestore(app)

	nuxtApp.provide('auth', auth)
	nuxtApp.provide('firestore', firestore)
})
