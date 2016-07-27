import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { getFirstLine } from '../utils/string'
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  SELECT_ARTICLE_LISTITEM,
  CHANGE_EDITOR_VALUE,
} from '../constants/actionTypes'

const initialState = fromJS([])

export default handleActions({
  [GET_ARTICLES]: (state, { payload }) => state.concat(payload),
  [ADD_ARTICLE]: (state, { payload }) => {
    let newState = state
    const articlesNum = state.size

    if (articlesNum === 0) {
      newState = state.push(payload)
    } else {
      for (let i = 0; i < state.size; i++) {
        if (state.getIn([i, 'isOpen'])) {
          newState = state.setIn([i, 'isOpen'], false).push(payload)
          break
        }
      }
    }

    localStorage.setItem('library', JSON.stringify(newState.toJS()))
    return newState
  },
  [SELECT_ARTICLE_LISTITEM]: (state, { payload }) => {
    // TODO: performance analysis
    let newState
    for (let i = 0; i < state.size; i++) {
      if (state.getIn([i, 'isOpen'])) {
        newState = state.setIn([i, 'isOpen'], false)
        break
      }
    }
    for (let i = 0; i < newState.size; i++) {
      if (state.getIn([i, 'id']) === payload) {
        newState = newState.setIn([i, 'isOpen'], true)
        break
      }
    }
    return newState
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

    localStorage.setItem('library', JSON.stringify(newState.toJS()))
    return newState
  },
}, initialState)
