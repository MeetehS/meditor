import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { TOGGLE_LIBRARY } from '../constants/actionTypes'

const initialState = fromJS({
  isOpen: true,
})

export default handleActions({
  [TOGGLE_LIBRARY]: state => state.set('isOpen', !state.get('isOpen')),
}, initialState)
