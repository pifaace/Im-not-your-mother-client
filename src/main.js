import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.performance = true
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.im-not-your-mother.com/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
