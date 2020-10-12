import VueRouter from 'vue-router'
import { getInstance } from '../auth/index'
import store from '@/store'
import NProgress from 'nprogress'
const Login = () => import('@/views/auth/Login')
const WorkspaceInvitation = () => import('@/views/workspaces/WorkspaceInvitation')
const WorkspaceHome = () => import('@/views/workspaces/WorkspaceHome')
const WorkspaceList = () => import('@/views/workspaces/WorkspaceList')
const Workspace = () => import('@/views/workspaces/Workspace')
const Profile = () => import('@/views/auth/Profile')
const Callback = () => import('@/views/auth/Callback')
const NotFound = () => import('@/components/errors/NotFound')

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
      path: '/callback',
      component: Callback,
      name: 'callback',
      meta: { requiresAuth: true }
    },
    {
      component: Profile,
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true }
    },
    {
      path: '/workspaces',
      component: Workspace,
      children: [
        {
          path: '',
          component: WorkspaceList,
          name: 'workspaceList',
          meta: { requiresAuth: true }
        },
        {
          path: ':id',
          component: WorkspaceHome,
          name: 'workspaceHome',
          meta: { requiresAuth: true },
          props: true,
          beforeEnter (routeTo, routeFrom, next) {
            store.dispatch('setCurrentWorkspace', routeTo.params.id)
              .then(() => {
                NProgress.done()
                next()
              })
          }
        },
        {
          path: ':id/invitation',
          component: WorkspaceInvitation,
          name: 'workspaceInvitation',
          meta: { requiresAuth: true },
          props: true
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  const authService = getInstance()

  const fn = () => {
    if (authService.isAuthenticated && to.name === 'login') {
      return next('/workspaces')
    }

    if (authService.isAuthenticated || !to.meta.requiresAuth) {
      return next()
    }

    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } })
  }

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn()
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
    if (loading === false) {
      return fn()
    }
  })
})

export default router
