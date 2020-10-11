import api from '@/logic/Api'

const END_POINT = '/users'

export const apiCurrentWorkspace = (workspaceId) => api.put(END_POINT + '/' + workspaceId + '/current')
