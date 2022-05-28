<template lang="pug">
  nav.navbar.navbar-expand-md.navbar-light.bg-light
    router-link.navbar-brand(to="/")
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
        router-link.btn.btn-light.nav-item(
          tag="li",
          activeClass="active",
          :to="{name: 'Bio'}")
          | Bio
        router-link.btn.btn-light.nav-item(
          tag="button",
          activeClass="active",
          :to="{name: 'Portfolio'}")
          | Portfolio               
        router-link.btn.btn-light.nav-item(
          tag="button",
          activeClass="active",
          :to="{name: 'ForSale'}")
            | For Sale
        router-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Stuff'}")
          | Cool Stuff
        router-link.btn.btn-light.nav-item(tag="li" activeClass="active" :to="{name: 'Contact'}")
          | Contact Us
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     isDropdownPortfolioOpen: false,
  //     isDropdownForSaleOpen: false,
  //     isDropdownOpen: false,
  //   }
  // },
  // methods: {
  //   openDropdownPortfolio() {
  //     this.isDropdownPortfolioOpen = true
  //   },
  //   closeDropdownPortfolio() {
  //     this.isDropdownPortfolioOpen = false
  //   },
  //   openDropdownForSale() {
  //     this.isDropdownForSaleOpen = true
  //   },
  //   closeDropdownForSale() {
  //     this.isDropdownForSaleOpen = false
  //   },
  // }
};
</script>
