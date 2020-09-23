<template>
  <form @submit.prevent="connexion">
    <b-form-group label="Email:">
      <b-form-input type="email" v-model="email" name="email" placeholder="Email" require>
      </b-form-input>
    </b-form-group>
    <b-form-group label="Mot de passe:">
      <b-form-input type="password" v-model="password" name="password" placeholder="Mot de passe" require>
      </b-form-input>
    </b-form-group>
    <p class="red" v-if="connect === false">Identifiants eronnées</p>
    <b-button variant="success" type="submit">
      Connexion
    </b-button>

  </form>
</template>

<script>
  import store from '@/assets/store'
  import axios from 'axios'
  import Vuex from 'vuex'
  export default {
    name: 'SignInForm',
    store: store,
    data: function () {
      return {
        email: '',
        password: '',
        connect: ''
      }
    },
    methods: {
      ...Vuex.mapActions([
        'addToken'
      ]),
      connexion(){
        axios.post('http://localhost:8080/sign-in',{
          email: this.email,
          password: this.password
        }).then((response)=>{
          this.$store.dispatch("addToken",response.data.token)
          this.connect = JSON.parse(response.data.connect)
          if (this.connect === true) {
            this.$router.push('/dashboard')
          }})
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'token'
      ])
    }
  }
</script>

<style>
  .red{
    color: red;
  }
</style>
