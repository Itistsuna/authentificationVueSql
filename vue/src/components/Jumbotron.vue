<template>
  <div class="jumbotron">
    <b-jumbotron>
      <template v-slot:header>Connection Interface</template>
      <template v-slot:lead>
        Below the formulary for SignUp or  SignIn in our magnificient application!
      </template>
      <hr class="my-4">
      <FormHandler/>
    </b-jumbotron>
  </div>
</template>

<script>
  import FormHandler from './FormHandler'
  export default {
    name: 'jumbotron',
    components: {FormHandler}
  }
</script>

<style>
  body{
    overflow-y: hidden;
  }
  .jumbotron{
    height: 100vh;
    text-align: center;
  }
  form{
    text-align: left;
  }
</style>
