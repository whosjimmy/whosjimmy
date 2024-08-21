// stores/departments.js
import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import {
	collection,
	getDocs,
	setDoc,
	doc,
	writeBatch,
} from 'firebase/firestore'

export const useGeneralStore = defineStore('general', {
	state: () => ({
		general: [],
		trackingCookiesEnabled: false,
	}),
	actions: {
		setGeneral(general) {
			this.general = general
		},
		setTrackingCookiesEnabled(trackingCookiesEnabled) {
			this.trackingCookiesEnabled = trackingCookiesEnabled
		},
		fetchTrackingCookie() {
			try {
				const trackingCookies = useCookie('trackingCookies')

				console.log('loaded trackingCookies', trackingCookies.value)
				this.setTrackingCookiesEnabled(trackingCookies.value || false)
			} catch (error) {
				console.error('Error fetching trackingCookies:', error)
			}
		},
		async fetchGeneral() {
			try {
				const { $firestore } = useNuxtApp()
				const departmentsCollection = collection($firestore, 'general')
				const generalDocs = await getDocs(departmentsCollection)
				// console.log('generalDocs', generalDocs)
				const general = generalDocs.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				// console.log('general', general)
				this.setGeneral(general)
			} catch (error) {
				console.error('Error fetching departments:', error)
			}
		},
		async saveGeneralItem({ general }) {
			const { $firestore } = useNuxtApp()
			try {
				await setDoc(doc($firestore, 'general', general.id), general)
				// this.updateDepartment({ departmentIndex, department })
			} catch (error) {
				throw new Error('Error saving general:', error)
			}
		},
		async saveAllGeneral() {
			const { $firestore } = useNuxtApp()
			try {
				const batch = writeBatch($firestore)
				this.general.forEach((department) => {
					const docRef = doc($firestore, 'general', general.id)
					batch.set(docRef, general)
				})
				await batch.commit()
			} catch (error) {
				console.error('Error saving all general:', error)
			}
		},
	},
	getters: {
		getGeneral: (state) => state.general,
	},
})
