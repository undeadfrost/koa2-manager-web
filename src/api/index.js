import http from './http'

export const fetchLogin = (params) => {
	return http('post', '/admin/login', params)
}

export const fetchRouteAuth = (params) => {
	return http('post', '/admin/route/auth', params)
}

export const fetchGetRoute = () => {
	return http('get', '/admin/menu')
}

export const fetchGetRole = (params) => {
	return http('get', '/admin/role', params)
}

export const fetchAddRole = (params) => {
	return http('post', '/admin/role', params)
}

export const fetchDelRole = (params) => {
	return http('delete', '/admin/role/', params)
}

export const fetchSaveRoleResources = (params) => {
	return http('post', '/admin/role/resources', params)
}

export const fetchGetRoleResources = (params) => {
	return http('get', '/admin/role/resources', params)
}

export const fetchGetUserList = (params) => {
	return http('get', '/admin/user', params)
}

export const fetchGetUserInfo = (params) => {
	return http('get', '/admin/user/info', params)
}

export const fetchAddUser = (params) => {
	return http('post', '/admin/user', params)
}

export const fetchDelUser = (params) => {
	return http('delete', '/admin/user', params)
}

export const fetchPutUserInfo = (params) => {
	return http('put', '/admin/user/info', params)
}
