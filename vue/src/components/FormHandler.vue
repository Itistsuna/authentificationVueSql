<template>
  <b-tabs>
    <b-tab title="Inscription">
      <SignUpForm/>
    </b-tab>
    <b-tab title="Connexion">
      <SignInForm/>
    </b-tab>
  </b-tabs>
</template>

<script>
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  export default {
    name: 'FormHandler',
    components: {SignInForm,SignUpForm}
  }
</script>
