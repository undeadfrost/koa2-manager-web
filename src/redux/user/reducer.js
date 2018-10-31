import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQwOTgxNTM2LCJleHAiOjE1NDA5ODE1NjZ9.9-K5b3BXbrwlVBz38RZB51LmBNYpmDBgmEVoUuCC_HE',
	isLogin: true,
	info: null
}

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {...state, ...action.payload}
		default:
			return state
	}
}
