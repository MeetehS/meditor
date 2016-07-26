import { combineReducers } from 'redux-immutable'
import routing from './routerReducer'
import user from './userReducer'
import library from './libraryReducer'

const reducers = combineReducers({
  routing,
  user,
  library,
})

export default reducers
