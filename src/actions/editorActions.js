import { createAction } from 'redux-actions'
import { SCROLL_EDITOR, SET_EDITOR_FOCUSED } from '../constants/actionTypes'

export const scrollEditorAction = createAction(SCROLL_EDITOR)

export const setEditorFocusedAction = createAction(SET_EDITOR_FOCUSED)
