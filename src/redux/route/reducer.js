import {UPDATE_ROUTE} from './actions'

const initState = null

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_ROUTE:
			return [...action.payload]
		default:
			return state
	}
}
