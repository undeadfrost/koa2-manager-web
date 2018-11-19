import http from './http'

export const fetchLogin = (params) => {
	return http('post', '/admin/login', params)
}

export const fetchRouteAuth = (params) => {
	return http('post', '/admin/route/auth', params)
}

export const fetchGetRoute = () => {
	return http('get', '/admin/nav')
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

export const fetchSaveRoleInfo = (params) => {
	return http('post', '/admin/role/info', params)
}

export const fetchGetRoleInfo = (params) => {
	return http('get', '/admin/role/info', params)
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

export const fetchgetMenu = () => {
	return http('get', '/admin/menu')
}
