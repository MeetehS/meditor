import { createAction } from 'redux-actions'

import {
  GET_ARTICLES,
  ADD_ARTICLE,
  EDIT_ARTICLE,
  ADD_CMD,
  FINISH_CMD,
  SELECT_ARTICLE,
  SEARCH_ARTICLES,
  TOGGLE_LIBRARY,
} from '../constants/actionTypes'

export const getArticlesAction = createAction(GET_ARTICLES)

export const addArticleAction = createAction(ADD_ARTICLE)

export const editArticleAction = createAction(EDIT_ARTICLE)

export const addCmdAction = createAction(ADD_CMD)

export const finishCmdAction = createAction(FINISH_CMD)

export const selectArticleAction = createAction(SELECT_ARTICLE)

export const searchArticlesAction = createAction(SEARCH_ARTICLES)

export const toggleLibraryAction = createAction(TOGGLE_LIBRARY)
