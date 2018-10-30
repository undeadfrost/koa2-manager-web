import {UPDATE_USER} from './actions'

const initState = {
	accessToken: null,
	isLogin: false,
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
