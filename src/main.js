import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import VueRouter from 'vue-router'
import Flash from './utils/Flash'
import '@/assets/app.scss'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.prototype.$flash = new Flash()
Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
