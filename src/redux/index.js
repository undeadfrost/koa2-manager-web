import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user/reducer'
import menuReducer from './menu/reducer'

const allReducer = {
	userData: userReducer,
	menusData: menuReducer
}

const store = createStore(combineReducers(allReducer), composeWithDevTools())

export default store
