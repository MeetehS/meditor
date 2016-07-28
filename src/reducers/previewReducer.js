import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { TOGGLE_PREVIEW } from '../constants/actionTypes'

const initialState = fromJS({
  isOpen: true,
})

export default handleActions({
  [TOGGLE_PREVIEW]: state => state.set('isOpen', !state.get('isOpen')),
}, initialState)
