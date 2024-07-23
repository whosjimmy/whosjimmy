<template lang="pug">
  .text-center.my-0
    app-header
    br
    .body
      <transition name="slide" mode="out-in">
        nuxt
      </transition>
    br
    app-footer
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped>
body {
  padding-top: 0px;
}
.body {
  max-width: 1000px;
  margin: auto;
}
    
.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in {
  from {
      transform: translateY(-30px);
      opacity: 0;      
  }
  to {
      transform: translateY(0);
      opacity: 1;      
  }
}
@keyframes slide-out {
  from {
      transform: translateY(0);
      opacity: 1;      
  }
  to {
      transform: translateY(-30px);
      opacity: 0;      
  }
}
</style>
