import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import {
	collection,
	getDocs,
	setDoc,
	doc,
	writeBatch,
} from 'firebase/firestore'

export const useDepartmentStore = defineStore('departments', {
	state: () => ({
		departments: [],
	}),
	actions: {
		setDepartments(departments) {
			this.departments = departments
		},
		addDepartment(department) {
			this.departments.push(department)
		},
		removeDepartment(departmentIndex) {
			this.departments.splice(departmentIndex, 1)
		},
		addMovie({ departmentIndex, movie }) {
			this.departments[departmentIndex].Movies.push(movie)
		},
		removeMovie({ departmentIndex, movieIndex }) {
			this.departments[departmentIndex].Movies.splice(movieIndex, 1)
		},
		updateMovie({ departmentIndex, movieIndex, movie }) {
			this.departments[departmentIndex].Movies[movieIndex] = movie
		},
		addPhoto({ departmentIndex, movieIndex, photo }) {
			this.departments[departmentIndex].Movies[movieIndex].Photos.push(
				photo
			)
		},
		removePhoto({ departmentIndex, movieIndex, photoIndex }) {
			this.departments[departmentIndex].Movies[movieIndex].Photos.splice(
				photoIndex,
				1
			)
		},
		async fetchDepartments() {
			try {
				const { $firestore } = useNuxtApp()
				const departmentsCollection = collection(
					$firestore,
					'departments'
				)
				const departmentDocs = await getDocs(departmentsCollection)
				const departments = departmentDocs.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				this.setDepartments(departments)
			} catch (error) {
				console.error('Error fetching departments:', error)
			}
		},
		async saveDepartment({ department }) {
			const { $firestore } = useNuxtApp()
			try {
				await setDoc(
					doc($firestore, 'departments', department.id),
					department
				)
				// this.updateDepartment({ departmentIndex, department })
			} catch (error) {
				throw new Error('Error saving department:', error)
			}
		},
		async saveAllDepartments() {
			const { $firestore } = useNuxtApp()
			try {
				const batch = writeBatch($firestore)
				this.departments.forEach((department) => {
					const docRef = doc($firestore, 'departments', department.id)
					batch.set(docRef, department)
				})
				await batch.commit()
			} catch (error) {
				console.error('Error saving all departments:', error)
			}
		},
	},
	getters: {
		getDepartments: (state) => state.departments,
	},
})
