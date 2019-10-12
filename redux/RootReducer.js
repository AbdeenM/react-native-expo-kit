import { combineReducers } from 'redux'

import ThemeReducer from '../config/theme/ThemeReducer'

export default combineReducers({
	theme: ThemeReducer,
	// ... add any reducers for your screens here
})
