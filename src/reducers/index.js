import { combineReducers } from 'redux'

// Reducers Import
import authReducer from './authReducer'
import headerReducer from './headerReducer'

export default combineReducers({
  auth: authReducer,
  header: headerReducer
})
