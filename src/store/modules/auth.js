import axios from 'axios'
import router from '@/router'

export default {
  state: {
    user: null,
    logged: !!window.localStorage.getItem('token')
  },
  mutations: {
    LOGIN (state, data) {
      state.logged = true

      window.localStorage.setItem('token', data.token)
      axios.defaults.headers.common.Authorization = 'Bearer ' + data.token
    },

    LOGOUT (state) {
      state.logged = false
      window.localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
    }
  },
  actions: {
    login ({ commit }, data) {
      commit('LOGIN', data)
      router.push({ name: 'workspaceList' })
    },

    logout ({ commit }) {
      commit('LOGOUT')
      router.push({ name: 'login' })
    }
  },
  getters: {
    isLoggedIn: state => state.logged
  }
}
