// composables/useUserManagement.ts
import { ref } from 'vue'
import type { Firestore } from 'firebase/firestore'
import {
	doc,
	getDoc,
	setDoc,
	updateDoc,
	serverTimestamp,
} from 'firebase/firestore'
import type { User } from 'firebase/auth'

export interface UserProfile {
	uid: string
	email: string
	displayName: string | null
	isAdmin: boolean
	createdAt: Date | null
	lastLoginAt: Date | null
}

interface FirestoreError extends Error {
	code?: string
}

export const useUserManagement = () => {
	const nuxtApp = useNuxtApp()
	const firestore = nuxtApp.$firestore as Firestore

	const loading = ref(false)
	const error = ref<string | null>(null)

	/**
	 * Get user profile from Firestore
	 */
	const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
		loading.value = true
		error.value = null

		try {
			const userDoc = await getDoc(doc(firestore, 'users', uid))

			if (userDoc.exists()) {
				const data = userDoc.data()
				return {
					uid: userDoc.id,
					email: data.email,
					displayName: data.displayName,
					isAdmin: data.isAdmin || false,
					createdAt: data.createdAt?.toDate() || null,
					lastLoginAt: data.lastLoginAt?.toDate() || null,
				}
			}

			return null
		} catch (err) {
			const firestoreError = err as FirestoreError
			console.error('Error getting user profile:', firestoreError)
			error.value = firestoreError.message
			return null
		} finally {
			loading.value = false
		}
	}

	/**
	 * Create or update user profile in Firestore
	 */
	const upsertUserProfile = async (
		user: User,
		isNewUser = false
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const userRef = doc(firestore, 'users', user.uid)

			if (isNewUser) {
				// Create new user document
				await setDoc(userRef, {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					isAdmin: false, // Default to non-admin
					createdAt: serverTimestamp(),
					lastLoginAt: serverTimestamp(),
				})
			} else {
				// Update existing user document
				const userDoc = await getDoc(userRef)

				if (userDoc.exists()) {
					// User exists, update last login
					await updateDoc(userRef, {
						lastLoginAt: serverTimestamp(),
						email: user.email,
						displayName: user.displayName,
					})
				} else {
					// User doesn't exist yet, create it
					await setDoc(userRef, {
						uid: user.uid,
						email: user.email,
						displayName: user.displayName,
						isAdmin: false,
						createdAt: serverTimestamp(),
						lastLoginAt: serverTimestamp(),
					})
				}
			}

			return true
		} catch (err) {
			const firestoreError = err as FirestoreError
			console.error('Error upserting user profile:', firestoreError)
			error.value = firestoreError.message
			return false
		} finally {
			loading.value = false
		}
	}

	/**
	 * Check if user is admin
	 */
	const isUserAdmin = async (uid: string): Promise<boolean> => {
		const profile = await getUserProfile(uid)
		return profile?.isAdmin || false
	}

	/**
	 * Set user admin status (only callable by existing admins)
	 */
	const setUserAdminStatus = async (
		uid: string,
		isAdmin: boolean
	): Promise<boolean> => {
		loading.value = true
		error.value = null

		try {
			const userRef = doc(firestore, 'users', uid)
			await updateDoc(userRef, {
				isAdmin: isAdmin,
			})

			return true
		} catch (err) {
			const firestoreError = err as FirestoreError
			console.error('Error setting admin status:', firestoreError)
			error.value = firestoreError.message
			return false
		} finally {
			loading.value = false
		}
	}

	return {
		loading,
		error,
		getUserProfile,
		upsertUserProfile,
		isUserAdmin,
		setUserAdminStatus,
	}
}
