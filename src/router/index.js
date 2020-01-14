import VueRouter from 'vue-router'
const Login = () => import('@/components/Auth/Login')
const Register = () => import('@/components/Auth/Register')

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    }
  ]
})
