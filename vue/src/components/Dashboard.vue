<template>
  <div>
    <h2>This is Dashboard page</h2>
    <hr class="my-4">
    <h3>Welcome to you connected user</h3>
    <hr class="my-4">
    <b-button variant="danger" @click="deconnexion()">Déconnexion</b-button>
  </div>
</template>

<script>
  import store from '@/assets/store'
  import Vuex, { mapActions } from 'vuex'
  export default {
    name: 'Dashboard',
    methods: {
      ...Vuex.mapActions([
        'deleteToken'
      ]),
      deconnexion: function(){
        this.$store.dispatch('deleteToken')
        this.$router.push('/')
      }
    },
  }
</script>

<style>
  div{
    text-align: center;
  }
</style>
