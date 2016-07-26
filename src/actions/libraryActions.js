import { createAction } from 'redux-actions'
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  SELECT_ARTICLE_LISTITEM,
  CHANGE_EDITOR_VALUE,
} from '../constants/actionTypes'

export const getArticles = createAction(GET_ARTICLES)

export const addArticle = createAction(ADD_ARTICLE)

export const selectArticleListItem = createAction(SELECT_ARTICLE_LISTITEM)

export const changeEditorValue = createAction(CHANGE_EDITOR_VALUE)
