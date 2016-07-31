import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { TOGGLE_TOOLBAR } from '../constants/actionTypes'

const initialState = fromJS({
  isHidden: false,
})

export default handleActions({
  [TOGGLE_TOOLBAR]: state => state.set('isHidden', !state.get('isHidden')),
}, initialState)
