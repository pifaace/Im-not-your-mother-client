import axios from 'axios'

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
    }
  },
  actions: {
    login ({ commit }, data) {
      commit('LOGIN', data)
    }
  },
  getters: {
    isLoggedIn: state => state.logged
  }
}
