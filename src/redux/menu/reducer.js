import {UPDATE_MENU} from './actions'

const initState = null

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_MENU:
			return [
				...action.payload
			]
		default:
			return state
	}
}
