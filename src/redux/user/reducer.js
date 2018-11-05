import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQxNDA3ODM2LCJleHAiOjE1NDE0MDc4NjZ9.XIb0Bs3_hChyEQG3AM_b1QcPMigZIAzG4IKb2cWDTzQ',
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
