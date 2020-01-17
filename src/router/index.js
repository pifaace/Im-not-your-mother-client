import VueRouter from 'vue-router'
import Auth from '@/utils/Auth'
const Login = () => import('@/components/Auth/Login')
const Register = () => import('@/components/Auth/Register')
const WorkspaceList = () => import('@/components/Workspaces/WorkspaceList')

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      component: Register,
      name: 'register',
      meta: { requiresAuth: false }
    },
    {
      path: '/workspaces',
      component: WorkspaceList,
      name: 'workspaceList',
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = new Auth()
  if (!auth.isAuthenticated() && to.meta.requiresAuth) {
    next('/login')
  } else if (auth.isAuthenticated() && !to.meta.requiresAuth) {
    console.log('mdr')
    next('/workspaces')
  } else {
    next()
  }
})

export default router
