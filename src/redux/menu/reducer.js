import {UPDATE_MENU} from './actions'

const initState = {
	navList: [],
	permissions: []
}

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_MENU:
			return {...state, ...action.payload}
		default:
			return state
	}
}
