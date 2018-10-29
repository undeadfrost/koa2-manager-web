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
