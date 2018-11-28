import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTU0MzM4NzI4NywiZXhwIjoxNTQzMzkwODg3fQ.fFVf62xI024tknZ2braD2arrVpPKj1bUXT6RPW5jOjc',
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
