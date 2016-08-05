import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import { getFirstLine } from '../utils/string'
import { getyyyymmddhhMMss } from '../utils/date'

import {
  GET_ARTICLES,
  ADD_ARTICLE,
  EDIT_ARTICLE,
  ADD_CMD,
  FINISH_CMD,
  SELECT_ARTICLE,
  TOGGLE_LIBRARY,
  SEARCH_ARTICLES,
} from '../constants/actionTypes'

const initialState = fromJS({
  isHidden: false,
  articles: [],
  currentArticle: {},
  searchText: '',
  searchArticles: [],
})

export default handleActions({
  [GET_ARTICLES]: (state, { payload }) => (
    state.update('articles', articles => articles.concat(fromJS(payload)))
  ),

  [ADD_ARTICLE]: (state, { payload }) => {
    const db = global.db

    const req = db.transaction('articles', 'readwrite').objectStore('articles').add(payload)

    req.onsuccess = () => console.info('add article to db success')

    return state.update('articles', articles => articles.unshift(fromJS(payload)))
  },

  [EDIT_ARTICLE]: (state, { payload }) => {
    let newState = state
    const title = getFirstLine(payload).replace(/#/g, '').trim()

    if (title !== state.getIn(['currentArticle', 'title'])) {
      newState = state.setIn(['currentArticle', 'title'], title)
    }

    newState = newState.setIn(['currentArticle', 'content'], payload)
      .setIn(['currentArticle', 'updated_at'], getyyyymmddhhMMss(new Date())
    )

    for (let i = 0, len = state.get('articles').size; i < len; i++) {
      if (state.getIn(['articles', i, 'id']) === state.getIn(['currentArticle', 'id'])) {
        return newState.setIn(['articles', i], newState.get('currentArticle'))
      }
    }
    return state
  },

  [ADD_CMD]: (state, { payload }) => {
    let newState = state
    const { selectionStart, content } = payload

    newState = state.updateIn(['currentArticle', 'content'], value => {
      const array = value.split('')
      array.splice(selectionStart, 0, content)
      return array.join('')
    })
    .setIn(['currentArticle', 'updated_at'], getyyyymmddhhMMss(new Date()))
    .setIn(['currentArticle', 'cmd'], fromJS(payload))

    for (let i = 0, len = state.get('articles').size; i < len; i++) {
      if (state.getIn(['articles', i, 'id']) === state.getIn(['currentArticle', 'id'])) {
        return newState.setIn(['articles', i], newState.get('currentArticle'))
      }
    }
    return state
  },

  [FINISH_CMD]: state => state.setIn(['currentArticle', 'cmd'], null),

  [SELECT_ARTICLE]: (state, { payload }) => {
    for (let i = 0, len = state.get('articles').size; i < len; i++) {
      if (state.getIn(['articles', i, 'id']) === payload) {
        return state.set('currentArticle', state.getIn(['articles', i]))
      }
    }
    return state
  },

  [SEARCH_ARTICLES]: (state, { payload }) => (
    state.set('searchText', payload).set('searchArticles',
      state.get('articles').filter(article =>
        article.get('content').toLowerCase().search(payload.toLowerCase()) !== -1))
  ),

  [TOGGLE_LIBRARY]: state => state.set('isHidden', !state.get('isHidden')),
}, initialState)
