import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { getFirstLine } from '../utils/string'
import { getyyyymmddhhMMss } from '../utils/date'
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  SELECT_ARTICLE_LISTITEM,
  CHANGE_EDITOR_VALUE,
  APPEND_CMD,
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
          newState = state.setIn([i, 'isOpen'], false).unshift(payload)
          break
        }
      }
    }

    localStorage.setItem('articles', JSON.stringify(newState.toJS()))
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
    // TODO: don't update title every time
    const title = getFirstLine(payload).replace(/#/g, '').trim()

    let newState
    for (let i = 0; i < state.size; i++) {
      if (state.getIn([i, 'isOpen'])) {
        const article = state.get(i)
                             .set('title', title)
                             .set('content', payload)
                             .set('updated_at', getyyyymmddhhMMss(new Date()))
        newState = state.splice(i, 1).unshift(article)
        break
      }
    }

    localStorage.setItem('articles', JSON.stringify(newState.toJS()))
    return newState
  },
  [APPEND_CMD]: (state, { payload }) => {
    let newState
    for (let i = 0; i < state.size; i++) {
      if (state.getIn([i, 'isOpen'])) {
        // TODO: don't update title every time
        const title = getFirstLine(state.getIn([i, 'content']) + payload).replace(/#/g, '').trim()

        newState = state.setIn([i, 'title'], title)
                        .updateIn([i, 'cmds'], value => value.push(payload))
                        .updateIn([i, 'content'], value => value + payload.get('cmd'))
        break
      }
    }

    localStorage.setItem('library', JSON.stringify(newState.toJS()))
    return newState
  },
}, initialState)
