import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Auth from '@/utils/Auth'
import Buefy from 'buefy'
import router from './router'
import VueRouter from 'vue-router'
import Flash from './utils/Flash'
import '@/assets/scss/app.scss'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.prototype.$flash = new Flash()
const auth = new Auth()
Vue.config.productionTip = false
Vue.config.performance = true

axios.defaults.baseURL = process.env.VUE_APP_IM_NOT_YOUR_MOTHER_API
axios.defaults.headers.common.Authorization = 'Bearer ' + auth.getToken()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
