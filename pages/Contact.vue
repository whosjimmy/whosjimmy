<template lang="pug">
.container-fluid.my-auto.h-100
	form(
		@submit.prevent="submit"
	)
		.row(v-if="!sucessfulServerResponse")
			.col-12.pt-2
				.form-group
					input#name.form-control(type="text", v-model="name" name="name", placeholder="Name") 
					.error(v-if="v$.name?.required.$invalid") name is required.
			.col-12.pt-2
				.form-group
					input#email.form-control(
						v-model="email"
						type="text",
						name="email",
						placeholder="Email"
					)
					.error(v-if="v$.email?.required.$invalid") email is required.
					.error(v-if="v$.email?.email.$invalid") valid email required.
			.col-12.pt-2
				.form-group
					input#subject.form-control(
						v-model="subject",
						type="text",
						name="subject",
						placeholder="Subject"
					)
					.error(v-if="v$.subject?.required.$invalid") subject is required.
			.col-12.pt-2
				.form-group
					textarea#message.form-control(
						v-model="message",
						name="message",
						cols="30",
						rows="7",
						placeholder="Message..."
					)
					.error(v-if="v$.message?.required.$invalid") message is required.
			.col-12.pt-2
				.form-group
					input.btn.btn-primary.btn-send-message(
						v-if="isValid",
						type="submit",
						value="Send Message"
					)
					input.btn.btn-secondary.btn-send-message(type="submit", v-else, disabled)
		.row(v-else)
			.col-12.p-2
				img.thank-you-image(src="/film/big_white/115-1560_IMG.JPG")
			.col-12.p-2
				| {{ sucessfulServerResponse }}
			.col-12.p-2
				button.btn.btn-primary(@click="$router.push('/')") Back to Home
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
	setup() {
		return { v$: useVuelidate() }
	},
	data() {
		return {
			name: '',
			email: '',
			subject: '',
			message: '',
			sucessfulServerResponse: 'Message Sent to Jimmy!',
			serverError: '',
			submitStatus: null,
			isValid: false,
		}
	},
	validations() {
		return {
			name: {
				required,
			},
			email: {
				required,
				email,
			},
			subject: {
				required,
			},
			message: {
				required,
			},
		}
	},
	// components: { VueRecaptcha },
	// head: {
	// 	script: [
	// 		{
	// 			src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
	// 			async: true,
	// 			defer: true,
	// 		},
	// 	],
	// },
	computed: {
		isValid() {
			if (!this.v$.name) return false
			else return !this.v$.$invalid
		},
	},
	methods: {
		resetForm() {
			this.name = this.email = this.subject = this.message = ''
			// this.$refs.recaptcha.reset() // Direct call reset method
		},
		resetMessages() {
			this.sucessfulServerResponse = ''
			this.serverError = ''
		},
		submit() {
			this.v$.$touch()
			this.resetMessages
			this.v$.$touch()
			if (this.v$.$invalid) {
				console.error('error')
			} else {
				axios
					.post('https://formspree.io/f/xdknagyz', {
						// jimmy@whosjimmy.com
						// .post('https://formspree.io/f/mwkzygob', { // sixhundred_claws@yahoo.com
						email: this.email,
						subject: this.subject,
						message: this.message,
					})
					.then((response) => {
						// this.sucessfulServerResponse = response.data.message;
						this.sucessfulServerResponse = 'Message Sent to Jimmy!'
						this.serverError = ''
						this.resetForm()
					})
					.catch((err) => {
						this.serverError = getErrorMessage(err)
						console.error(this.serverError)
						if ((this.serverError = '"int(200)\n"')) {
							this.serverError = 'Form Error'
						}
						this.sucessfulServerResponse = ''

						//helper to get a displayable message to the user
						function getErrorMessage(err) {
							let responseBody
							responseBody = err.response
							if (!responseBody) {
								responseBody = err
							} else {
								responseBody = err.response.data || responseBody
							}
							return (
								responseBody.message ||
								JSON.stringify(responseBody)
							)
						}
					})
			}
		},
	},
}
</script>

<style>
.successful-server-response-wrapper {
	display: flex;
	justify-content: center;
	align-content: center;
}

.successful-server-response {
	text-align: center;
	max-width: 500px;
	font-size: 36px;
	background-color: #5cb85c;
	color: #f1f1f1;
	padding: 20px;
	border-radius: 3px;
}
.thank-you-image {
	width: 50%;
}
</style>
