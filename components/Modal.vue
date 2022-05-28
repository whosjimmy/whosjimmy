<template lang="pug">
  .modal(class="modal",
        v-bind:class="customClass",
        v-bind:style="{ display: show ? 'block' : 'none' }")
    .modal_content
      .close
        button.btn.btn-secondary(title="Close",
              @click="closeCallback()")
          fab.mr-2.ml-2.fa-2x(:icon="['fa', 'times']")
      slot
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    customClass: String,
    closeCallback: Function
  }
}
</script>
<style scoped>
  .modal {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal_content {
    background-color: white;
  }
  .close {
   top:0;
   right:0;
  }
</style>
