export default {
  state: {
    errorStatus: null
  },
  mutations: {
    SET_ERROR_STATUS (state, data) {
      state.errorStatus = data
    }
  },
  actions: {
    setErrorStatus ({ commit }, data) {
      commit('SET_ERROR_STATUS', data)
    }
  },
  getters: {
    errorStatus: state => state.errorStatus
  }
}
