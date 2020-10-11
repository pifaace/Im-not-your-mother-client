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
const NotFound = () => import('@/views/errors/NotFound')
const NetworkIssue = () => import('@/views/errors/NetworkIssue')

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
            NProgress.start()
            store.dispatch('setCurrentWorkspace', routeTo.params.id)
              .then(() => {
                next()
              })
              .catch(error => {
                if (error.response && (error.response.status === 404 || error.response.status === 401)) {
                  next({ name: 'not-found', params: { resource: 'workspace' } })
                } else {
                  next({ name: 'network-issue' })
                }
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
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: 'not-found', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((to, from, next) => {
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

router.afterEach(() => {
  NProgress.done()
})

export default router
