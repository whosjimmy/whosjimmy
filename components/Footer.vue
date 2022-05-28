<template lang="pug">
  footer.page-footer.font-small.bg-light.navbar-fixed-bottom
    .container
      .py-3.pt-3
        a.text-danger(href="https://www.youtube.com/user/jimmyclaws")
          fab.mr-2.ml-2.fa-2x(:icon="['fab', 'youtube']")
        a(href="https://www.facebook.com/whosjimmy")
          fab.white-text.mr-2.ml-2.fa-2x(:icon="['fab', 'facebook-square']")
        a(href="https://twitter.com/jimmyclaws")
          fab.white-text.mr-2.ml-2.fa-2x(:icon="['fab', 'twitter']")
        a.text-secondary(href="http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1")
          fab.mr-2.ml-2.fa-2x(:icon="['fab', 'imdb']")
      //- a.gplus-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'google-plus-g']")
      //- a.li-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'linkedin-in']")
      //- a.ins-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'instagram']")
      //- a.pin-ic 
      //-   fab.mr-2.ml-2.fa-2x(:icon="['fab', 'pinterest']")
    .footer-copyright.text-center.font-small
      div © 2019 Copyright: 
        a(href="http://whosjimmy.com/") WhosJimmy.com
      div Disclaimer: All images are copyright to their respective owners.
      div A 
        a(href="http://dj-design.ca") DJ-Design.ca
        |  creation.

  //   .form-group
  //     | This site is protected by reCAPTCHA and the Google 
  //     a(href="https://policies.google.com/privacy") Privacy Policy
  //     |  and 
  //     a(href="https://policies.google.com/terms") Terms of Service
  //     |  apply.
</template>

<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
</script>
<style scoped>
.row {
  padding-top: 15px;
}
</style>


