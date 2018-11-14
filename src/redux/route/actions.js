export const UPDATE_ROUTE = 'UPDATE_ROUTE'

export const updateRoute = (params) => {
	return {
		type: UPDATE_ROUTE,
		payload: params
	}
}
