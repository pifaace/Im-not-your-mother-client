import router from '@/router'
import { apiMe } from '@/logic/auth/Auth.api'

export default {
  state: {
    user: {},
    logged: !!window.localStorage.getItem('token')
  },
  mutations: {
    LOGIN (state, data) {
      state.logged = true

      window.localStorage.setItem('token', data.token)
    },

    LOGOUT (state) {
      state.logged = false
      window.localStorage.removeItem('token')
    },

    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    fetchUser ({ commit }) {
      apiMe()
        .then(({ data }) => {
          commit('SET_USER', data)
        })
    },

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
