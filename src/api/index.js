import http from './http'

export const fetchLogin = (params) => {
	return http('post', '/admin/login', params)
}
