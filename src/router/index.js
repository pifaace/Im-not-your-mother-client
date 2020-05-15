import VueRouter from 'vue-router'
import Auth from '@/utils/Auth'
const ConfirmUser = () => import('@/components/Auth/ConfirmUser')
const Login = () => import('@/components/Auth/Login')
const Register = () => import('@/components/Auth/Register')
const WorkspaceInvitation = () => import('@/components/Workspaces/WorkspaceInvitation')
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
      path: '/users/confirm',
      component: ConfirmUser,
      name: 'confirmUser',
      meta: { requiresAuth: false },
      beforeEnter: (to, from, next) => {
        if (!Object.prototype.hasOwnProperty.call(to.query, 'token')) {
          return next('/login')
        }

        next()
      }
    },
    {
      path: '/workspaces',
      component: WorkspaceList,
      name: 'workspaceList',
      meta: { requiresAuth: true }
    },
    {
      path: '/workspaces/:id/invitation',
      component: WorkspaceInvitation,
      name: 'workspaceInvitation',
      meta: { requiresAuth: true },
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = new Auth()
  if (!auth.isAuthenticated() && to.meta.requiresAuth) {
    return next('/login')
  }

  if (auth.isAuthenticated() && !to.meta.requiresAuth) {
    return next('/workspaces')
  }

  next()
})

export default router
