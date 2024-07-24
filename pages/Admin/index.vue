<template lang="pug">
  .wrapper
    form.form-signin
      h2.form-signin-heading Admin login
      input.form-control(type="text" name="username" placeholder="Email Address" required="" autofocus="")
      input.form-control(type="password" name="password" placeholder="Password" required="")      
      label.checkbox
        input(type="checkbox" value="remember-me" id="rememberMe" name="rememberMe")
        |  Remember me
      button.btn.btn-lg.btn-primary.btn-block(type="submit" @click.prevent="submit") Login
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		submit() {
			this.$router.push('/Admin/Portal')
		},
	},
}
</script>
