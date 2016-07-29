import { createAction } from 'redux-actions'
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  SEARCH_ARTICLES,
  SELECT_ARTICLE_LISTITEM,
  CHANGE_EDITOR_VALUE,
  APPEND_CMD,
} from '../constants/actionTypes'

export const getArticles = createAction(GET_ARTICLES)

export const addArticle = createAction(ADD_ARTICLE)

export const searchArticles = createAction(SEARCH_ARTICLES)

export const selectArticleListItem = createAction(SELECT_ARTICLE_LISTITEM)

export const changeEditorValue = createAction(CHANGE_EDITOR_VALUE)

export const appendCmd = createAction(APPEND_CMD)
