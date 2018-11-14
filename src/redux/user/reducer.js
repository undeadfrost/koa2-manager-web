import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQyMTc4ODE5LCJleHAiOjE1NDIxODI0MTl9.KkO9jNwWMxA_UIejVsGD_g2Je5x9vCISekCwravT0q0',
	isLogin: true,
	info: null,
	userList: []
}

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {...state, ...action.payload}
		default:
			return state
	}
}
