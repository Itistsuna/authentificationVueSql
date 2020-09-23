// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from '@/router/index'
import VueRouter from 'vue-router'
import store from '@/assets/store.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = true

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')
