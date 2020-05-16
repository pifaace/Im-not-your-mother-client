import Vue from 'vue'
import store from '@/store'
import axios from 'axios'
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

axios.defaults.baseURL = process.env.VUE_APP_IM_NOT_YOUR_MOTHER_API
axios.defaults.headers.common.Authorization = 'Bearer ' + window.localStorage.token

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
