import { combineReducers } from 'redux-immutable'
import routing from './routerReducer'
import user from './userReducer'
import articles from './articlesReducer'
import library from './libraryReducer'
import preview from './previewReducer'
import toolbar from './toolbarReducer'
import search from './searchReducer'

const reducers = combineReducers({
  routing,
  user,
  articles,
  library,
  preview,
  toolbar,
  search,
})

export default reducers
