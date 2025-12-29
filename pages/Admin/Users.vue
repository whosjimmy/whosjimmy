<template>
	<div class="user-management">
		<div class="header">
			<h1>User Management</h1>
			<div class="header-actions">
				<input
					v-model="searchQuery"
					type="text"
					placeholder="Search users..."
					class="search-input"
				/>
				<button class="btn btn-primary" @click="refreshUsers">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<polyline points="23 4 23 10 17 10"></polyline>
						<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
					</svg>
					Refresh
				</button>
			</div>
		</div>

		<div v-if="loading" class="loading">
			<div class="spinner"></div>
			Loading users...
		</div>

		<div v-else-if="error" class="error">
			<p>{{ error }}</p>
			<button class="btn btn-secondary" @click="refreshUsers">
				Try Again
			</button>
		</div>

		<div v-else class="content">
			<div class="stats">
				<div class="stat-card">
					<div class="stat-label">Total Users</div>
					<div class="stat-value">{{ totalUsers }}</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Admin Users</div>
					<div class="stat-value">{{ adminCount }}</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Regular Users</div>
					<div class="stat-value">{{ totalUsers - adminCount }}</div>
				</div>
			</div>

			<div class="table-container">
				<table class="users-table">
					<thead>
						<tr>
							<th>Email</th>
							<th>Display Name</th>
							<th>Admin</th>
							<th>Created</th>
							<th>Last Login</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in paginatedUsers" :key="user.uid">
							<td>
								<div class="user-email">
									{{ user.email }}
								</div>
							</td>
							<td>
								<div class="user-name">
									{{ user.displayName || 'N/A' }}
								</div>
							</td>
							<td>
								<label class="checkbox-container">
									<input
										v-model="user.isAdmin"
										type="checkbox"
										:disabled="
											updatingUser === user.uid ||
											user.uid === currentUserUid
										"
										@change="updateUserAdmin(user)"
									/>
									<span class="checkmark"></span>
								</label>
							</td>
							<td>
								<div class="date-cell">
									{{ formatDate(user.createdAt) }}
								</div>
							</td>
							<td>
								<div class="date-cell">
									{{ formatDate(user.lastLoginAt) }}
								</div>
							</td>
							<td>
								<div class="actions">
									<button
										v-if="updatingUser === user.uid"
										class="btn-action btn-loading"
										disabled
									>
										<div class="mini-spinner"></div>
									</button>
									<button
										v-else
										class="btn-action btn-view"
										:title="`View ${user.email}`"
										@click="viewUser(user)"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
											></path>
											<circle
												cx="12"
												cy="12"
												r="3"
											></circle>
										</svg>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<div v-if="filteredUsers.length === 0" class="no-results">
					<p>No users found</p>
				</div>
			</div>

			<div v-if="totalPages > 1" class="pagination">
				<button
					class="btn btn-page"
					:disabled="currentPage === 1"
					@click="currentPage--"
				>
					Previous
				</button>

				<div class="page-numbers">
					<button
						v-for="page in visiblePages"
						:key="page"
						class="btn btn-page"
						:class="{ active: currentPage === page }"
						@click="currentPage = page"
					>
						{{ page }}
					</button>
				</div>

				<button
					class="btn btn-page"
					:disabled="currentPage === totalPages"
					@click="currentPage++"
				>
					Next
				</button>

				<div class="page-info">
					Page {{ currentPage }} of {{ totalPages }} ({{
						filteredUsers.length
					}}
					users)
				</div>
			</div>
		</div>

		<!-- User Detail Modal -->
		<div v-if="selectedUser" class="modal-overlay" @click="closeModal">
			<div class="modal" @click.stop>
				<button class="modal-close" @click="closeModal">✕</button>
				<h2>User Details</h2>
				<div class="user-details">
					<div class="detail-row">
						<span class="detail-label">UID:</span>
						<span class="detail-value">{{ selectedUser.uid }}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Email:</span>
						<span class="detail-value">{{
							selectedUser.email
						}}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Display Name:</span>
						<span class="detail-value">{{
							selectedUser.displayName || 'N/A'
						}}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Admin Status:</span>
						<span class="detail-value">
							<span
								:class="[
									'badge',
									selectedUser.isAdmin
										? 'badge-admin'
										: 'badge-user',
								]"
							>
								{{
									selectedUser.isAdmin
										? 'Admin'
										: 'Regular User'
								}}
							</span>
						</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Account Created:</span>
						<span class="detail-value">{{
							formatDateLong(selectedUser.createdAt)
						}}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Last Login:</span>
						<span class="detail-value">{{
							formatDateLong(selectedUser.lastLoginAt)
						}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Firestore } from 'firebase/firestore'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useAuthStore } from '~/stores/auth'
import { useUserManagement } from '~/composables/useUserManagement'

interface User {
	uid: string
	email: string
	displayName: string | null
	isAdmin: boolean
	createdAt: Date | null
	lastLoginAt: Date | null
}

const nuxtApp = useNuxtApp()
const firestore = nuxtApp.$firestore as Firestore
const authStore = useAuthStore()
const userManagement = useUserManagement()

// State
const users = ref<User[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const updatingUser = ref<string | null>(null)
const selectedUser = ref<User | null>(null)

// Current user UID (can't change own admin status)
const currentUserUid = computed(() => authStore.getUser?.uid || '')

// Filtered users based on search
const filteredUsers = computed(() => {
	if (!searchQuery.value) return users.value

	const query = searchQuery.value.toLowerCase()
	return users.value.filter(
		(user) =>
			user.email.toLowerCase().includes(query) ||
			user.displayName?.toLowerCase().includes(query) ||
			user.uid.toLowerCase().includes(query)
	)
})

// Pagination
const totalPages = computed(() =>
	Math.ceil(filteredUsers.value.length / itemsPerPage.value)
)
const paginatedUsers = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage.value
	const end = start + itemsPerPage.value
	return filteredUsers.value.slice(start, end)
})

// Visible page numbers for pagination
const visiblePages = computed(() => {
	const pages: number[] = []
	const maxVisible = 5
	let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
	let end = Math.min(totalPages.value, start + maxVisible - 1)

	if (end - start < maxVisible - 1) {
		start = Math.max(1, end - maxVisible + 1)
	}

	for (let i = start; i <= end; i++) {
		pages.push(i)
	}

	return pages
})

// Stats
const totalUsers = computed(() => users.value.length)
const adminCount = computed(() => users.value.filter((u) => u.isAdmin).length)

// Fetch all users from Firestore
const fetchUsers = async () => {
	loading.value = true
	error.value = null

	try {
		const usersRef = collection(firestore, 'users')
		const q = query(usersRef, orderBy('createdAt', 'desc'))
		const querySnapshot = await getDocs(q)

		users.value = querySnapshot.docs.map((doc) => {
			const data = doc.data()
			return {
				uid: doc.id,
				email: data.email || '',
				displayName: data.displayName || null,
				isAdmin: data.isAdmin || false,
				createdAt: data.createdAt?.toDate() || null,
				lastLoginAt: data.lastLoginAt?.toDate() || null,
			}
		})
	} catch (err) {
		const fetchError = err as Error
		console.error('Error fetching users:', fetchError)
		error.value = 'Failed to load users. Please try again.'
	} finally {
		loading.value = false
	}
}

// Update user admin status
const updateUserAdmin = async (user: User) => {
	// Prevent changing own admin status
	if (user.uid === currentUserUid.value) {
		user.isAdmin = !user.isAdmin // Revert the checkbox
		alert('You cannot change your own admin status')
		return
	}

	updatingUser.value = user.uid

	try {
		const success = await userManagement.setUserAdminStatus(
			user.uid,
			user.isAdmin
		)

		if (!success) {
			// Revert on failure
			user.isAdmin = !user.isAdmin
			alert('Failed to update admin status')
		}
	} catch (err) {
		console.error('Error updating admin status:', err)
		user.isAdmin = !user.isAdmin
		alert('Failed to update admin status')
	} finally {
		updatingUser.value = null
	}
}

// View user details
const viewUser = (user: User) => {
	selectedUser.value = user
}

// Close modal
const closeModal = () => {
	selectedUser.value = null
}

// Refresh users
const refreshUsers = () => {
	currentPage.value = 1
	fetchUsers()
}

// Format date
const formatDate = (date: Date | null): string => {
	if (!date) return 'N/A'
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
}

const formatDateLong = (date: Date | null): string => {
	if (!date) return 'N/A'
	return new Date(date).toLocaleString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	})
}

// Initialize
onMounted(() => {
	fetchUsers()
})
</script>

<style scoped>
.user-management {
	max-width: 1400px;
	margin: 0 auto;
	padding: 40px 20px;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
	flex-wrap: wrap;
	gap: 20px;
}

.header h1 {
	font-size: 32px;
	font-weight: 700;
	color: #1a1a1a;
	margin: 0;
}

.header-actions {
	display: flex;
	gap: 12px;
	align-items: center;
}

.search-input {
	padding: 10px 16px;
	border: 1px solid #ddd;
	border-radius: 8px;
	font-size: 14px;
	width: 250px;
	transition: border-color 0.2s;
}

.search-input:focus {
	outline: none;
	border-color: #4285f4;
}

.btn {
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	gap: 8px;
}

.btn-primary {
	background: #4285f4;
	color: white;
}

.btn-primary:hover {
	background: #3367d6;
}

.btn-secondary {
	background: #f0f0f0;
	color: #333;
}

.btn-secondary:hover {
	background: #e0e0e0;
}

.loading {
	text-align: center;
	padding: 60px 20px;
	color: #666;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
}

.spinner {
	width: 40px;
	height: 40px;
	border: 4px solid #f3f3f3;
	border-top: 4px solid #4285f4;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.error {
	text-align: center;
	padding: 40px 20px;
	color: #d32f2f;
}

.error p {
	margin-bottom: 20px;
	font-size: 16px;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.stats {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
}

.stat-card {
	background: white;
	padding: 24px;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.stat-label {
	font-size: 14px;
	color: #666;
	margin-bottom: 8px;
}

.stat-value {
	font-size: 32px;
	font-weight: 700;
	color: #1a1a1a;
}

.table-container {
	background: white;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	overflow: hidden;
}

.users-table {
	width: 100%;
	border-collapse: collapse;
}

.users-table thead {
	background: #f8f9fa;
}

.users-table th {
	padding: 16px;
	text-align: left;
	font-size: 13px;
	font-weight: 600;
	color: #666;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	border-bottom: 2px solid #e0e0e0;
}

.users-table tbody tr {
	border-bottom: 1px solid #f0f0f0;
	transition: background 0.2s;
}

.users-table tbody tr:hover {
	background: #f8f9fa;
}

.users-table td {
	padding: 16px;
	font-size: 14px;
	color: #333;
}

.user-email {
	font-weight: 500;
}

.user-name {
	color: #666;
}

.date-cell {
	color: #666;
	font-size: 13px;
}

.checkbox-container {
	display: inline-block;
	position: relative;
	cursor: pointer;
	user-select: none;
}

.checkbox-container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.checkmark {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: white;
	border: 2px solid #ddd;
	border-radius: 4px;
	transition: all 0.2s;
}

.checkbox-container:hover input:not(:disabled) ~ .checkmark {
	border-color: #4285f4;
}

.checkbox-container input:checked ~ .checkmark {
	background: #4285f4;
	border-color: #4285f4;
}

.checkbox-container input:checked ~ .checkmark:after {
	content: '';
	position: absolute;
	left: 7px;
	top: 3px;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}

.checkbox-container input:disabled ~ .checkmark {
	opacity: 0.5;
	cursor: not-allowed;
}

.actions {
	display: flex;
	gap: 8px;
}

.btn-action {
	padding: 8px;
	border: none;
	background: #f0f0f0;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
}

.btn-action:hover:not(:disabled) {
	background: #e0e0e0;
}

.btn-action:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.btn-view {
	color: #4285f4;
}

.btn-view:hover {
	background: #e8f0fe;
}

.mini-spinner {
	width: 16px;
	height: 16px;
	border: 2px solid #f3f3f3;
	border-top: 2px solid #4285f4;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

.no-results {
	padding: 60px 20px;
	text-align: center;
	color: #999;
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	flex-wrap: wrap;
	padding: 20px;
	background: white;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.page-numbers {
	display: flex;
	gap: 8px;
}

.btn-page {
	padding: 8px 12px;
	min-width: 40px;
	border: 1px solid #ddd;
	background: white;
	border-radius: 6px;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s;
}

.btn-page:hover:not(:disabled) {
	background: #f8f9fa;
	border-color: #4285f4;
}

.btn-page:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.btn-page.active {
	background: #4285f4;
	color: white;
	border-color: #4285f4;
}

.page-info {
	color: #666;
	font-size: 14px;
	margin-left: 12px;
}

/* Modal Styles */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	animation: fadeIn 0.2s ease;
}

.modal {
    display: flex;
	background: white;
	border-radius: 16px;
	padding: 32px;
	max-width: 600px;
	width: 90%;
	max-height: 80vh;
	overflow-y: auto;
	position: relative;
	animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.modal h2 {
	margin: 0 0 24px 0;
	font-size: 24px;
	font-weight: 700;
	color: #1a1a1a;
}

.modal-close {
	position: absolute;
	top: 16px;
	right: 16px;
	background: none;
	border: none;
	font-size: 24px;
	color: #999;
	cursor: pointer;
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all 0.2s;
}

.modal-close:hover {
	background: #f0f0f0;
	color: #333;
}

.user-details {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.detail-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid #f0f0f0;
}

.detail-row:last-child {
	border-bottom: none;
}

.detail-label {
	font-weight: 600;
	color: #666;
	font-size: 14px;
}

.detail-value {
	color: #333;
	font-size: 14px;
	text-align: right;
}

.badge {
	padding: 4px 12px;
	border-radius: 12px;
	font-size: 12px;
	font-weight: 600;
}

.badge-admin {
	background: #e8f5e9;
	color: #2e7d32;
}

.badge-user {
	background: #f5f5f5;
	color: #666;
}

@media (max-width: 768px) {
	.header {
		flex-direction: column;
		align-items: flex-start;
	}

	.header-actions {
		width: 100%;
		flex-direction: column;
	}

	.search-input {
		width: 100%;
	}

	.table-container {
		overflow-x: auto;
	}

	.users-table {
		min-width: 800px;
	}

	.stats {
		grid-template-columns: 1fr;
	}
}
</style>
