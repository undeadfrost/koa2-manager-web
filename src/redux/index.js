import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user/reducer'
import menuReducer from './menu/reducer'
import rolesReducer from './role/reducer'
import routeReducer from './route/reducer'

const allReducer = {
	userData: userReducer,
	menusData: menuReducer,
	rolesData: rolesReducer,
	routeData: routeReducer
}

const store = createStore(combineReducers(allReducer), composeWithDevTools())

export default store
