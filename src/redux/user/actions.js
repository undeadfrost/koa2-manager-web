export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = (params) => {
	return {
		type: UPDATE_USER,
		payload: params
	}
}
