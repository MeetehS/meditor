import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { TOGGLE_PREVIEW } from '../constants/actionTypes'

const initialState = fromJS({
  isHidden: false,
})

export default handleActions({
  [TOGGLE_PREVIEW]: state => state.set('isHidden', !state.get('isHidden')),
}, initialState)
