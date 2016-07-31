import { combineReducers } from 'redux-immutable'
import libraryState from './libraryReducer'
import editorState from './editorReducer'
import previewState from './previewReducer'
import toolbarState from './toolbarReducer'

const reducers = combineReducers({
  libraryState,
  editorState,
  previewState,
  toolbarState,
})

export default reducers
