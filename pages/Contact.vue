<template lang="pug">
.container-fluid
  .row
    .col-lg-12.pt-2
      form(
        @submit.prevent="submit"
      )
        .form-group
          input#name.form-control(type="text", name="name", placeholder="Name") 
        .form-group
          input#email.form-control(
            v-model.trim="$v.email.$model"
            type="text",
            name="email",
            placeholder="Email"
          )
          .error(v-if="!$v.email.required") email is required.
          .error(v-if="!$v.email.email") email is required to be an email.
        .form-group
          input#subject.form-control(
            v-model="subject",
            type="text",
            name="subject",
            placeholder="Subject"
          )
          .error(v-if="!$v.subject.required") subject is required.
        .form-group
          textarea#message.form-control(
            v-model="message",
            name="message",
            cols="30",
            rows="7",
            placeholder="Message..."
          )
          .error(v-if="!$v.message.required") message is required.
        .form-group
          input.btn.btn-primary.btn-send-message(
            type="submit",
            value="Send Message"
            :disabled="$v.$invalid"
          )
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      sucessfulServerResponse: "",
      serverError: "",
      submitStatus: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    subject: {
      required,
    },
    message: {
      required,
    },
  },
  // components: { VueRecaptcha },
  head: {
    script: [
      {
        src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
        async: true,
        defer: true,
      },
    ],
  },
  methods: {
    resetForm() {
      this.email = this.subject = this.message = this.recaptcha = "";
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    resetMessages() {
      (this.sucessfulServerResponse = ""), (this.serverError = "");
    },
    submit() {
      // console.log(this.$v)
      this.$v.$touch();
      this.resetMessages;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        // console.log("email", this.email)
        // console.log("subject", this.subject)
        // console.log("message", this.message)
        // return null;
        axios
          // .post("https://formspree.io/inquiries@whosjimmy.com", {
          .post("https://formspree.io/f/mwkzygob", {
            email: this.email,
            subject: this.subject,
            message: this.message,
          })
          .then((response) => {
            // this.sucessfulServerResponse = response.data.message;
            this.sucessfulServerResponse = "Message Sent";
            this.serverError = "";
            this.resetForm();
          })
          .catch((err) => {
            this.serverError = getErrorMessage(err);
            console.log(this.serverError);
            if ((this.serverError = '"int(200)\n"')) {
              this.serverError = "Form Error";
            }
            this.sucessfulServerResponse = "";

            //helper to get a displayable message to the user
            function getErrorMessage(err) {
              let responseBody;
              responseBody = err.response;
              if (!responseBody) {
                responseBody = err;
              } else {
                responseBody = err.response.data || responseBody;
              }
              return responseBody.message || JSON.stringify(responseBody);
            }
          });
      }
    },
  },
};
</script>

<style>
.successful-server-response-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}

.successful-server-response {
  text-align: center;
  max-width: 500px;
  font-size: 36px;
  background-color: #5cb85c;
  color: #f1f1f1;
  padding: 20px;
  border-radius: 3px;
}
</style>
