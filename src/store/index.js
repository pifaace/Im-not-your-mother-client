import Vue from 'vue'
import Vuex from 'vuex'
import currentWorkspace from '@/store/modules/currentWorkspace'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currentWorkspace
  }
})
