import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import { SCROLL_EDITOR, SET_EDITOR_FOCUSED } from '../constants/actionTypes'

const initialState = fromJS({
  editor: null,
  scrollPercentage: 0,
  isFocused: true,
})

export default handleActions({
  [SCROLL_EDITOR]: (state, { payload }) => state.set('scrollPercentage', payload),

  [SET_EDITOR_FOCUSED]: (state, { payload }) => state.set('isFocused', payload),
}, initialState)
