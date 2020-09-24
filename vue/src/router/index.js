import App from '@/components/Jumbotron.vue'
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
import store from '@/assets/store'

const that = this

const routes = [
  {
    path: '/',
    component: App
  },{
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      console.log(store.getters.token);
      axios.post('http://localhost:8080/authentification',{
        token: store.getters.token
      }).then((Response)=>{
        if (JSON.parse(Response.data.connect) === true) {
          next()
        }else{
          next('/')
        }
      })
    }
  }
]

export default routes
