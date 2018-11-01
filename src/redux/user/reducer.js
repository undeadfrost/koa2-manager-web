import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQxMDYwMzYxLCJleHAiOjE1NDEwNjAzOTF9.ez1M9s7vy8f5J89PscsJCZs9iBpm70dNMLIAklgl_sw',
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
