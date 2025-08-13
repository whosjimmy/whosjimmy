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
      aria-label="Toggle navigation"
      @click="visible=!visible")
      span.navbar-toggler-icon
    .navbar-collapse(id="navbarNavDropdown" :class="!visible?'collapse':''" )
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
        nuxt-link.btn.btn-light.nav-item.image-nav-item.cta-button(tag="li" activeClass="active" to="/Portfolio/Videos")
          img.nav-image(src="/channels4_banner.jpg" alt="Channel Banner")
          .cta-overlay
            span.cta-text WATCH NOW
            .cta-pulse
    .collapse.navbar-collapse(id="navbarNavDropdown" v-if="isAuth")
      ul.navbar-nav.ml-auto
        nuxt-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Admin'}")
          | {{ user ? user.email : ''}}
        button.btn.btn-light.nav-item(tag="li" @click="signOut")
          | Logout
  </template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default {
	data() {
		return {
			visible: false,
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

<style scoped>
/* Button fits in navbar, image can overflow but is hidden */
.image-nav-item {
	overflow: hidden;
	width: 160px; /* Your width setting */
	height: 40px; /* Your height setting */
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	position: relative;
	border: 2px solid #ff6b6b !important; /* YouTube red border */
	border-radius: 8px !important;
	transition: all 0.3s ease;
	margin: 0 auto; /* Center the button on mobile */
}

/* Mobile responsiveness */
@media (max-width: 767px) {
	.navbar-nav .image-nav-item {
		margin: 0.5rem auto; /* Center with some vertical spacing on mobile */
		width: 220px; /* Bigger on mobile */
		height: 55px; /* Taller on mobile */
	}

	.navbar-nav .nav-image {
		height: 180px; /* Scale up the image too */
	}

	.navbar-nav .cta-overlay {
		bottom: 3px;
		right: 3px;
		padding: 2px 6px;
		font-size: 10px; /* Slightly larger text */
	}
}

/* Call-to-action button styling */
.cta-button:hover {
	transform: scale(1.05);
	box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.nav-image {
	height: 140px; /* Your size setting */
	width: auto;
	position: relative;
	top: 0px; /* Your positioning */
	left: 0px; /* Your positioning */
	transition: all 0.3s ease;
}

/* Call-to-action overlay */
.cta-overlay {
	position: absolute;
	bottom: 2px;
	right: 2px;
	background: rgba(255, 107, 107, 0.9);
	color: white;
	padding: 1px 4px;
	border-radius: 3px;
	font-size: 8px;
	font-weight: bold;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	z-index: 10;
}

.cta-text {
	display: block;
	line-height: 1;
}

/* Subtle pulsing animation */
.cta-pulse {
	position: absolute;
	top: -2px;
	left: -2px;
	right: -2px;
	bottom: -2px;
	border: 2px solid #ff6b6b;
	border-radius: 3px;
	opacity: 0;
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		opacity: 0;
		transform: scale(1);
	}
	50% {
		opacity: 0.7;
		transform: scale(1.1);
	}
	100% {
		opacity: 0;
		transform: scale(1.2);
	}
}

/* Make button more prominent on hover */
.cta-button:hover .nav-image {
	filter: brightness(1.1) saturate(1.2);
}

.cta-button:hover .cta-overlay {
	background: rgba(255, 0, 0, 0.95);
	transform: scale(1.05);
}
</style>
