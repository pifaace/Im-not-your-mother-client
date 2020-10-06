import axios from 'axios'
import { getInstance } from '../auth/index'

const api = axios.create({
  baseURL: process.env.VUE_APP_IM_NOT_YOUR_MOTHER_API,
  timeout: 5000,
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

export default api
