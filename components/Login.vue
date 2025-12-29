<!-- components/Login.vue -->
<template>
	<div class="container">
		<form @submit.prevent="handleSubmit">
			<div class="row">
				<div class="col-md-12">
					<input v-model="email" placeholder="Email" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<input
						v-model="password"
						type="password"
						placeholder="Password"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<button type="submit">Sign In</button>
				</div>
			</div>
		</form>

		<!-- Google Sign-In for YouTube Access -->
		<div class="row mt-4">
			<div class="col-md-12">
				<div class="divider">
					<span>OR</span>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<button
					type="button"
					class="google-signin-btn"
					:disabled="youtubeAuth.state.value.loading"
					@click="signInWithGoogle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 48 48"
					>
						<path
							fill="#EA4335"
							d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
						/>
						<path
							fill="#4285F4"
							d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
						/>
						<path
							fill="#FBBC05"
							d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
						/>
						<path
							fill="#34A853"
							d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
						/>
						<path fill="none" d="M0 0h48v48H0z" />
					</svg>
					{{
						youtubeAuth.state.value.loading
							? 'Signing in...'
							: 'Sign in with Google for YouTube'
					}}
				</button>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<p v-if="authError" class="error-message">
					{{ authError }}
				</p>
				<p v-if="youtubeAuth.state.value.error" class="error-message">
					{{ youtubeAuth.state.value.error }}
				</p>
				<p
					v-if="youtubeAuth.state.value.isSignedIn"
					class="success-message"
				>
					✓ Connected to YouTube
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'
import { useUserManagement } from '~/composables/useUserManagement'
import { useYouTubeAuth } from '~/composables/useYouTubeAuth'

const authStore = useAuthStore()
const { authError } = storeToRefs(authStore)

const youtubeAuth = useYouTubeAuth()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
	await authStore.signIn(email.value, password.value)
}

const signInWithGoogle = async () => {
	const success = await youtubeAuth.signInWithYouTube()

	if (success && youtubeAuth.state.value.accessToken) {
		// Store access token in auth store
		authStore.setYouTubeAccess(youtubeAuth.state.value.accessToken)

		// Create/update user profile in Firestore
		if (youtubeAuth.state.value.user) {
			const userMgmt = useUserManagement()
			await userMgmt.upsertUserProfile(
				youtubeAuth.state.value.user,
				false
			)
		}
	}
}

// Initialize YouTube auth state on mount
onMounted(() => {
	youtubeAuth.initializeYouTubeAuth()
})
</script>

<script lang="ts">
export default {
	name: 'Login',
}
</script>

<style scoped>
.divider {
	text-align: center;
	margin: 20px 0;
	position: relative;
}

.divider::before,
.divider::after {
	content: '';
	position: absolute;
	top: 50%;
	width: 45%;
	height: 1px;
	background: #ddd;
}

.divider::before {
	left: 0;
}

.divider::after {
	right: 0;
}

.divider span {
	padding: 0 10px;
	background: white;
	color: #666;
	font-size: 14px;
}

.google-signin-btn {
	width: 100%;
	padding: 12px 24px;
	background: white;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 500;
	color: #444;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	transition: all 0.2s ease;
}

.google-signin-btn:hover:not(:disabled) {
	background: #f8f9fa;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.google-signin-btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.error-message {
	color: #dc3545;
	margin-top: 10px;
	font-size: 14px;
}

.success-message {
	color: #28a745;
	margin-top: 10px;
	font-size: 14px;
	font-weight: 500;
}
</style>
