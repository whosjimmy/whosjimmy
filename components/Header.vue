<template lang="pug">
nav.navbar.navbar-expand-md.navbar-light.bg-light
  nuxt-link.navbar-brand(to="/")
    | Who's Jimmy
  button.navbar-toggler(
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation")
    span.navbar-toggler-icon
  .collapse.navbar-collapse(id="navbarNavDropdown")
    ul.navbar-nav
      nuxt-link.btn.btn-light.nav-item(
        tag="li",
        activeClass="active",
        :to="{name: 'Bio'}")
        | Bio
      nuxt-link.btn.btn-light.nav-item(
        tag="button",
        activeClass="active",
        :to="{name: 'Portfolio'}")
        | Portfolio               
      nuxt-link.btn.btn-light.nav-item(
        tag="button",
        activeClass="active",
        :to="{name: 'ForSale'}")
          | For Sale
      nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Stuff'}")
        | Cool Stuff
      nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Contact'}")
        | Contact Us
  .collapse.navbar-collapse(id="navbarNavDropdown" v-if="isAuth")
    ul.navbar-nav.ml-auto
      nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Admin'}")
        | {{ user ? user.email : ''}}
      button.btn.btn-light.nav-item(tag="li" @click="signOut")
        | Logout
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '~/store/auth'

export default {
	data() {
		return {
			isAuth: false,
		}
	},
	computed: {
		...mapState(useAuthStore, {
			user: 'getUser',
			isAuthenticated: 'isAuthenticated',
		}),
	},
	watch: {
		isAuthenticated(newVal) {
			this.isAuth = newVal
		},
	},
	mounted() {
		this.isAuth = this.isAuthenticated
	},

	methods: {
		...mapActions(useAuthStore, { signOut: 'signOut' }),
	},
}
</script>
