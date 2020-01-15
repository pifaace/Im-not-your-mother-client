import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.config.performance = true

axios.defaults.baseURL = 'https://api.im-not-your-mother.com'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
