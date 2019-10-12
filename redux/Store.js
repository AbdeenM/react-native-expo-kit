import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import { persistReducer } from 'redux-persist'
import { applyMiddleware, createStore, compose } from 'redux'

import RootReducer from './RootReducer'

const middlewares = [
	promise,
	thunk,
	createLogger()
]

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
}

const pReducer = persistReducer(persistConfig, RootReducer)

const Store = createStore(
	pReducer,
	undefined,
	compose(applyMiddleware(...middlewares))
)

export default Store
