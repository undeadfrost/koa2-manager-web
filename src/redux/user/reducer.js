import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTU0MzIxNzM1OCwiZXhwIjoxNTQzMjIwOTU4fQ.GmBLkLo24wlhdZzYhMp8-8ZOAXDq1BflqIYv0TjM2Jw',
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
