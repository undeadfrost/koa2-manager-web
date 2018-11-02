import {UPDATE_USER} from './actions'

const initState = {
	accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWJvIiwiaWF0IjoxNTQxMTcyNDA3LCJleHAiOjE1NDExNzI0Mzd9.ZLk1CrnmJincwTxGqjoc9txGtTHOomTqcVl9zYjeBX8',
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
