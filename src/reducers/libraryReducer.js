import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { getFirstLine } from '../utils/string'
import { GET_ARTICLES, ADD_ARTICLE, CHANGE_EDITOR_VALUE } from '../constants/actionTypes'

const initialState = fromJS([{
  id: 0,
  title: 'Article0',
  content: 'Article0',
  created_at: '2016-07-26 15:58:00',
  updated_at: '2016-07-26 15:58:00',
  isOpen: true,
}, {
  id: 1,
  title: 'Article1',
  content: 'Article1',
  created_at: '2016-07-26 15:58:00',
  updated_at: '2016-07-26 15:58:00',
  isOpen: false,
}])

export default handleActions({
  [GET_ARTICLES]: (state, { payload }) => state.concat(payload),
  [ADD_ARTICLE]: (state, { payload }) => {
    let newState
    for (let i = 0; i < state.size; i++) {
      if (state.getIn([i, 'isOpen'])) {
        newState = state.setIn([i, 'isOpen'], false)
        break
      }
    }
    return newState.push(payload)
  },
  [CHANGE_EDITOR_VALUE]: (state, { payload }) => {
    const title = getFirstLine(payload).replace(/#/g, '').trim()

    let newState
    for (let i = 0; i < state.size; i++) {
      if (state.getIn([i, 'isOpen'])) {
        newState = state.setIn([i, 'title'], title).setIn([i, 'content'], payload)
        break
      }
    }
    return newState
  },
}, initialState)
