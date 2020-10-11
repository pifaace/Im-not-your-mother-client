import { apiCurrentWorkspace } from '../../logic/users/User.api'

export default {
  state: {
    currentWorkspaceId: null
  },
  mutations: {
    SET_CURRENT_WORKSPACE (state, data) {
      state.currentWorkspace = data
    }
  },
  actions: {
    setCurrentWorkspace ({ commit }, data) {
      apiCurrentWorkspace(data)
        .then(() => {
          commit('SET_CURRENT_WORKSPACE', data)
        })
    }
  },
  getters: {
    currentWorkspaceId: state => state.currentWorkspaceId
  }
}
