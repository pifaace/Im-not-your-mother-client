import api from '@/logic/Api'

const END_POINT = '/workspaces'

export const apiWorkspaceList = () => api.get(END_POINT)
export const apiWorkspaceInvitation = (id) => api.put(END_POINT + `/${id}/invitation`)
export const apiWorkspaceCreate = (data) => api.post(END_POINT, data)
