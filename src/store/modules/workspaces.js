import { apiWorkspaceList, apiWorkspaceCreate } from '@/logic/workspaces/Workspace.api'

export default {
  state: {
    workspaces: []
  },
  mutations: {
    SET_WORKSPACES (state, data) {
      state.workspaces = data
    },

    CREATE_WORKSPACE (state, data) {
      state.workspaces.push(data)
    },

    LOGOUT (state) {
      state.workspaces = []
    }
  },
  actions: {
    fetchWorkspaces ({ commit }) {
      apiWorkspaceList()
        .then(({ data }) => {
          commit('SET_WORKSPACES', data)
        })
    },

    createWorkspace ({ commit }, data) {
      return apiWorkspaceCreate(data)
        .then(({ data }) => {
          commit('CREATE_WORKSPACE', data)
          return data
        })
        .catch(error => {
          return Promise.reject(error)
        })
    },

    logout ({ commit }) {
      commit('LOGOUT')
    }
  },
  getters: {}
}
