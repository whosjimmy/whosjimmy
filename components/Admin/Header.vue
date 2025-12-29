<template lang="pug">
div
  nav.navbar.navbar-expand-md.navbar-light.bg-light
    nuxt-link.navbar-brand(to="/Admin/Home")
      | Home
    button.navbar-toggler(
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="visible=!visible")
      span.navbar-toggler-icon
    .navbar-collapse(id="navbarNavDropdown" :class="!visible?'collapse':''" )
      ul.navbar-nav
        nuxt-link.btn.btn-light.nav-item(
          tag="li",
          activeClass="active",
          to="/Admin/Users")
          | Users
        nuxt-link.btn.btn-light.nav-item(
          tag="li",
          activeClass="active",
          to="/Admin/Bio")
          | Bio
        nuxt-link.btn.btn-light.nav-item(
          tag="button",
          activeClass="active",
          to="/Admin/Portfolio")
          | Portfolio               
        nuxt-link.btn.btn-light.nav-item(
          tag="button",
          activeClass="active",
          to="/Admin/ForSale")
            | For Sale
        nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" to="/Admin/Stuff")
          | Cool Stuff
        nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" to="/Admin/Contact")
          | Contact Us
  nav.navbar.navbar-expand-md.navbar-light.bg-light(v-if="$route.path.startsWith('/Admin/Portfolio')")
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Clocks")
      | Clocks
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Machinery")
      | Machinery
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Celebs")
      | Celebs
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Truck")
      | Truck
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Film")
      | Film
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/Portfolio/Videos")
      | Videos
  nav.navbar.navbar-expand-md.navbar-light.bg-light(v-if="$route.path.startsWith('/Admin/ForSale')")
    nuxt-link.btn.btn-light.nav-item(
      tag="button",
      activeClass="active",
      to="/Admin/ForSale")
        | For Sale
    nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" to="/Admin/Stuff")
      | Cool Stuff
    nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" to="/Admin/Contact")
      | Contact Us
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default {
	data() {
		return {
			visible: false,
			isAuth: false,
			isAdmin: false,
		}
	},
	computed: {
		...mapState(useAuthStore, {
			user: 'getUser',
			isAuthenticated: 'isAuthenticated',
			getIsAdmin: 'getIsAdmin',
		}),
	},
	watch: {
		isAuthenticated(newVal) {
			this.isAuth = newVal
		},
	},
	mounted() {
		this.isAuth = this.isAuthenticated
		this.isAdmin = this.getIsAdmin

		if (!this.isAdmin) {
			this.$router.replace('/login')
		}
	},

	methods: {
		...mapActions(useAuthStore, { signOut: 'signOut' }),
	},
}
</script>
