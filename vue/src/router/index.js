import App from '@/components/Jumbotron.vue'
import Dashboard from '@/components/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: App
  },{
    path: '/dashboard',
    component: Dashboard,
  }
]

export default routes
