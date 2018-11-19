import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTU0MjYyMDY3MSwiZXhwIjoxNTQyNjI0MjcxfQ.yjL6w1vCB98Q3AptHwryWRA0oWQaWM5YhU0uPP0CgkA',
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
