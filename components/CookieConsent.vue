<template>
	<div v-if="!isChecked" class="cookie-consent">
		<p>
			This website uses cookies to ensure you get the best experience on
			our website.
		</p>
		<div class="row">
			<div class="col text-right">
				<input
					id="functionalCookies"
					type="checkbox"
					disabled
					checked
				/>
				<label for="functionalCookies">Functional</label>
			</div>
			<div class="col text-left">
				<input
					id="trackingCookies"
					v-model="isCheckedTracking"
					type="checkbox"
				/>
				<label for="trackingCookies">Tracking</label>
			</div>
		</div>
		<div class="row">
			<div class="col text-right">
				<button class="btn btn-secondary" @click="acceptCustom">
					Accept Custom
				</button>
			</div>
			<div class="col text-left">
				<button class="btn btn-primary" @click="acceptAll">
					Accept All
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapActions } from 'pinia'
import { useGeneralStore } from '~/stores/general'
export default {
	data() {
		return {
			isChecked: false,
			isCheckedTracking: false,
		}
	},
	mounted() {
		const cookie = useCookie('consentChecked')
		if (cookie.value) {
			this.isChecked = true
		}
	},
	methods: {
		...mapActions(useGeneralStore, ['setTrackingCookiesEnabled']),
		handleConsentChecked() {
			const consentChecked = useCookie('consentChecked')
			consentChecked.value = 'true'
		},
		handleFunctionalCookies(value: string) {
			const cookieFunctionalCookies = useCookie('functionalCookies')
			cookieFunctionalCookies.value = value
		},
		handleTrackingCookies(value: string) {
			const cookieTrackingCookies = useCookie('trackingCookies')
			cookieTrackingCookies.value = value
			this.setTrackingCookiesEnabled(value)
			//TODO: insure loading of tracking cookies without manual reload
		},
		acceptAll() {
			this.handleFunctionalCookies('true')
			this.handleTrackingCookies('true')
			this.handleConsentChecked()
			this.isChecked = true
		},
		acceptCustom() {
			this.handleFunctionalCookies('true')
			if (this.isCheckedTracking) {
				this.handleTrackingCookies('true')
			}
			this.handleConsentChecked()
			this.isChecked = true
		},
	},
}
</script>

<style>
.cookie-consent {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px;
	background: #eee;
	color: #000;
	z-index: 999;
}
input[type='checkbox'] {
	margin-right: 10px;
}
</style>
