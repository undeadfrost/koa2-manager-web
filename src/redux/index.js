import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user/reducer'
import menuReducer from './menu/reducer'
import rolesReducer from './role/reducer'

const allReducer = {
	userData: userReducer,
	menusData: menuReducer,
	rolesData: rolesReducer
}

const store = createStore(combineReducers(allReducer), composeWithDevTools())

export default store
