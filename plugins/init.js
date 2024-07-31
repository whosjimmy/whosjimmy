// plugins/init.js
import { useDepartmentStore } from '~/store/departments'

export default defineNuxtPlugin((nuxtApp) => {
	const auth = nuxtApp.$auth // Access the auth instance
	const departmentStore = useDepartmentStore() // Use the Pinia store
	departmentStore.fetchDepartments()
})
