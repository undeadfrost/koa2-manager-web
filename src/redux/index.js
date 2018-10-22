import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user/reducer'

const allReducer = {
	userData: userReducer
}

const store = createStore(combineReducers(allReducer), composeWithDevTools())

export default store
