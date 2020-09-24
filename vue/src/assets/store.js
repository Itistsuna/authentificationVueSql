import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      token: ''
    },
    mutations: {
      ADD_TOKEN: (state, token) => {
        state.token = token
      },
      DELETE_TOKEN:(state) => {
        state.token = ''
      }

    },
    getters: {
      token: state => state.token
    },
    actions: {
      addToken: (store, token) => {
        store.commit('ADD_TOKEN',token)
      },
      deleteToken: (store) => {
        store.commit('DELETE_TOKEN')
      }
    },
    plugins: [createPersistedState()]

})
global.store = store

export default store
