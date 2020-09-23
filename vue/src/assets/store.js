import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      token: ''
    },
    mutations: {
      ADD_TOKEN: (state, token) => {
        state.token = token
      }
    },
    getters: {
      token: state => state.token
    },
    actions: {
      addToken: (store, token) => {
        store.commit('ADD_TOKEN',token)
      }
    }

})
global.store = store
export default store
