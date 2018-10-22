export const UPDATE_USER = 'UPDATE_USER'

export const setUser = (params) => {
	return {
		type: UPDATE_USER,
		payload: params
	}
}
