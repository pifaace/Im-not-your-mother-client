import api from '@/logic/Api'

export const apiLoginCheck = (data) => api.post('/login_check', data)
export const apiRegister = (data) => api.post('register', data)
export const apiConfirmUser = (token) => api.get('/users/confirm?token=' + token)
export const apiMe = () => api.get('/users/me')
