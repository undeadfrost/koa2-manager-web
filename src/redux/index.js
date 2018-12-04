import {createStore, combineReducers} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user/reducer'
import menuReducer from './menu/reducer'
import rolesReducer from './role/reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['userData']
}

const allReducer = {
	userData: userReducer,
	menusData: menuReducer,
	rolesData: rolesReducer,
}

const persistedReducer = persistReducer(persistConfig, combineReducers(allReducer))
export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)

