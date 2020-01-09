import VueRouter from 'vue-router'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

export default new VueRouter({
  routes
})
