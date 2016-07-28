import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { TOGGLE_TOOLBAR } from '../constants/actionTypes'

const initialState = fromJS({
  isOpen: true,
})

export default handleActions({
  [TOGGLE_TOOLBAR]: state => state.set('isOpen', !state.get('isOpen')),
}, initialState)
