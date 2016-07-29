import { handleActions } from 'redux-actions'
import { CHANGE_SEARCH_VALUE } from '../constants/actionTypes'

const initialState = ''

export default handleActions({
  [CHANGE_SEARCH_VALUE]: (_, { payload }) => payload,
}, initialState)
