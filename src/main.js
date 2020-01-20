import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Auth from '@/utils/Auth'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(Buefy)
Vue.use(VueRouter)

const auth = new Auth()

Vue.config.productionTip = false
Vue.config.performance = true

axios.defaults.baseURL = 'https://api.im-not-your-mother.com'
axios.defaults.headers.common.Authorization = 'Bearer ' + auth.getToken()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
