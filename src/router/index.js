import VueRouter from 'vue-router'
import store from '@/store'
const ConfirmUser = () => import('@/views/auth/ConfirmUser')
const Login = () => import('@/views/auth/Login')
const Register = () => import('@/views/auth/Register')
const WorkspaceInvitation = () => import('@/views/workspaces/WorkspaceInvitation')
const WorkspaceList = () => import('@/views/workspaces/WorkspaceList')

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
  if (!store.getters.isLoggedIn && to.meta.requiresAuth) {
    return next('/login')
  }

  if (store.getters.isLoggedIn && !to.meta.requiresAuth) {
    return next('/workspaces')
  }

  next()
})

export default router
