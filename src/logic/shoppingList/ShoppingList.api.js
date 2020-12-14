import api from '@/logic/Api'

const END_POINT = '/shopping-lists'

export const apiCreateShoppingList = (data) => api.post(END_POINT, data)
export const apiGetShoppingList = (data) => api.get(END_POINT)
