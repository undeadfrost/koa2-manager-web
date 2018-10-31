import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQwOTY2MTk4LCJleHAiOjE1NDA5NjYyMjh9.DN6JMCZSnBl00GzJzKIBhAfUAmXFXmAkyckFDEHN5Zg',
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
