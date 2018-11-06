import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQxNDk0NDkxLCJleHAiOjE1NDE0OTQ1MjF9.RFbfRukP8Ikr-RqJQr2KqwRn-Hq0d78hvabizVsr-YI',
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
