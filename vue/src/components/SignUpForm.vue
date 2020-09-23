<template>
  <form @submit.prevent="inscription">
    <p v-if="inscrit">Vous êtes maintenant inscrit , veuillez vous login</p>
    <b-form-group label="Name:" description="We'll never share your email with anyone else.">
      <b-form-input type="text" v-model="name" name="name" placeholder="Nom" require>
      </b-form-input>
    </b-form-group>
    <b-form-group label="Email:">
      <b-form-input  type="email" v-model="email" name="email" placeholder="Email" require>
      </b-form-input>
    </b-form-group>
    <b-form-group label="Mot de passe:">
      <b-form-input type="password" v-model="password" name="password" placeholder="Mot de passe" require>
      </b-form-input>
    </b-form-group>
    <b-button variant="success" type="submit">
      Inscription
    </b-button>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SignUpForm',
    data() {
      return {
        name:'',
        email:'',
        password:'',
        inscrit: false
      }
    },
    methods: {
      inscription(){
        axios.post('http://localhost:8080/sign-up',{
          name: this.name,
          email: this.email,
          password: this.password
        }).then((response) => {this.inscrit = response.data.inscription})
      }
    }
  }
</script>
