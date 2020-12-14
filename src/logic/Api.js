import axios from 'axios'
import store from '@/store'
import { getInstance } from '../auth/index'

const api = axios.create({
  baseURL: process.env.VUE_APP_IM_NOT_YOUR_MOTHER_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(async (request) => {
  const authService = getInstance()
  const token = await authService.getTokenSilently()

  if (authService.isAuthenticated) {
    request.headers.common.Authorization = 'Bearer ' + token
  }
  return request
})

api.interceptors.response.use(
  r => r,
  e => {
    if (!e.response) {
      store.dispatch('setErrorStatus', 500)
      return e
    }

    if (e.response.status === 400) {
      throw e
    }

    if (e.response.status === 404) {
      store.dispatch('setErrorStatus', 404)
    }

    if (e.response.status === 401) {
      store.dispatch('setErrorStatus', 401)
    }

    if (e.response.status === 500) {
      store.dispatch('setErrorStatus', 500)
    }
  }
)

export default api
