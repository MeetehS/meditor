import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import { SCROLL_EDITOR } from '../constants/actionTypes'

const initialState = fromJS({
  editor: null,
  scrollPercentage: 0,
})

export default handleActions({
  [SCROLL_EDITOR]: (state, { payload }) => state.set('scrollPercentage', payload),
}, initialState)
