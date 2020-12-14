import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import VueRouter from 'vue-router'
import Flash from './utils/Flash'
import '@/assets/app.scss'
import { Auth0Plugin } from './auth'
import '@mdi/font/scss/materialdesignicons.scss'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
  audience: process.env.VUE_APP_API_AUDIENCE,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.prototype.$flash = new Flash()
Vue.config.productionTip = false
Vue.config.performance = true

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  }
})

export const bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
