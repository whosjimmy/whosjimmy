<template lang="pug">
  .container-fluid.row
    .col-md-12
      form(@submit.prevent="submit")
        .form-group
          label.d-flex.justify-content-start(for="To") To:
          input.form-control(type="text",
                             id="To",
                             aria-describedby="toHelp",
                             placeholder="To Jimmy",
                             value="inquiries@whosjimmy.com",
                             disabled)
        .form-group
          label.d-flex.justify-content-start(for="email") Email:
          input.form-control(type="email",
                            v-model="email",
                            id="email",
                            aria-describedby="emailHelp",
                            placeholder="Enter Your Email")
        .form-group
          label.d-flex.justify-content-start(for="Subject") Subject:
          input.form-control(type="text",
                            v-model="subject",
                            id="Subject",
                            aria-describedby="subjectHelp",
                            placeholder="Enter Subject")
        .form-group
          label.d-flex.justify-content-start(for="Subject") Message:
          textarea.form-control(id="textArea",
                            v-model="emailMessage",
                            rows="3")
        .form-group.d-flex.justify-content-center
        
          vue-recaptcha(
              @verify="onVerify",
              @expired="onExpired",
              ref="recaptcha",
              sitekey="6LfjVYYUAAAAAETolfKK25Nkm0EEIZd1JDyMrqYf")

        .form-group
          button.btn.btn-primary(type="submit" :disabled="!isVailided") Submit

        .form-group
          .text-success(v-show="sucessfulServerResponse")
            | {{ sucessfulServerResponse }}
          .text-danger(v-show="serverError")
            | {{ serverError }}
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
      emailMessage: "",
      recaptcha: "",
      isVailided: false,
      sucessfulServerResponse: "",
      serverError: ""
    };
  },
  validations: {
    emailMessage: {
      required,
      email
    },
    subject: {
      required
    },
    message: {
      required
    }
  },
  components: { VueRecaptcha },
  head: {
    script: [
      {
        src:
          "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
        async: true,
        defer: true
      }
    ]
  },
  methods: {
    onVerify: function(response) {
      this.isVailided = true;
      this.recaptcha = response;
      // console.log(response);
    },
    onExpired: function() {
      this.isVailided = false;
    },
    resetForm() {
      this.email = this.subject = this.emailMessage = this.recaptcha = "";
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    resetMessages() {
      (this.sucessfulServerResponse = ""), (this.serverError = "");
    },
    submit() {
      // console.log(this.$v)
      this.$v.$touch();
      this.resetMessages;

      axios
        .post("/contact.php", {
          email: this.email,
          subject: this.subject,
          emailMessage: this.emailMessage,
          recaptcha: this.recaptcha
        })
        .then(response => {
          // this.sucessfulServerResponse = response.data.message;
          this.sucessfulServerResponse = "Message Sent";
          this.serverError = "";
          this.resetForm();
        })
        .catch(err => {
          this.serverError = getErrorMessage(err);
          console.log(this.serverError);
          if (this.serverError = '"int(200)\n"') {
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
            this.$refs.recaptcha.reset();
          }
        });
    }
  }
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
