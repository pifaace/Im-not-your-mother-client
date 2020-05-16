import axios from 'axios'
import store from '@/store'
import router from '@/router'

const api = axios.create({
  baseURL: process.env.VUE_APP_IM_NOT_YOUR_MOTHER_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.request.use((request) => {
  if (window.sessionStorage.getItem('token') !== undefined) {
    request.headers.common.Authorization = 'Bearer ' + window.localStorage.getItem('token')
  }
  return request
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && router.currentRoute.name !== 'login') {
      store.dispatch('logout')
    }

    return Promise.reject(error)
  }
)

export default api
