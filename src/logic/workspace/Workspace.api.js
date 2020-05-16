import api from '@/logic/Api'

const END_POINT = '/workspaces'

export const apiWorkspaceList = () => api.get(END_POINT)
export const apiWorkspaceInvitation = (id) => api.get(END_POINT + `/${id}/invitation`)
