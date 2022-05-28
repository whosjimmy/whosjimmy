<template lang="pug">
  .wrapper
    ul.list-group
      li.list-group-item(v-for="film in films" :key="film.id" @click="edit_film") {{film.name}}
</template>
<script>
export default {
  data() {
    return {
      films: [
        {id: 0, name: "x-men"}
      ]
    }
  },
  methods: {
    edit_film() {
      this.$router.push("/Admin/Film")
    }
  }
}
</script>