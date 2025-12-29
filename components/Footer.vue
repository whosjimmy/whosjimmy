<template lang="pug">
  footer.page-footer.font-small.bg-light.navbar-fixed-bottom
    .container
      .py-3.pt-3
        a.text-danger(href="https://www.youtube.com/user/jimmyclaws")
          font-awesome-icon.mr-2.ml-2.fa-2x(:icon="['fab', 'youtube']")
        a(href="https://www.facebook.com/whosjimmy")
          font-awesome-icon.white-text.mr-2.ml-2.fa-2x(:icon="['fab', 'facebook-square']")
        a(href="https://twitter.com/jimmyclaws")
          font-awesome-icon.white-text.mr-2.ml-2.fa-2x(:icon="['fab', 'twitter']")
        a.text-secondary(href="http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1")
          font-awesome-icon.mr-2.ml-2.fa-2x(:icon="['fab', 'imdb']")
      //- a.gplus-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'google-plus-g']")
      //- a.li-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'linkedin-in']")
      //- a.ins-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'instagram']")
      //- a.pin-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'pinterest']")
    .footer-copyright.text-center.font-small
      div © 2025 Copyright: 
        a(href="http://whosjimmy.com/") WhosJimmy.com
      div Disclaimer: All images are copyright to their respective owners.
      div
        nuxt-link.text-white(:to="{name: 'Terms'}") Terms
        | A 
        a(href="http://JohnstonSoftwareDevelopment.ca" target="_blank") JSD
        |  creation.
        nuxt-link.text-white(:to="{name: 'Privacy'}") Privacy
  </template>

<style scoped>
.row {
	padding-top: 15px;
}
svg {
	max-height: 25px;
}
</style>
