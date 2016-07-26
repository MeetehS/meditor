import { createAction } from 'redux-actions'
import { GET_ARTICLES, ADD_ARTICLE, CHANGE_EDITOR_VALUE } from '../constants/actionTypes'

export const getArticles = createAction(GET_ARTICLES)

export const addArticle = createAction(ADD_ARTICLE)

export const changeEditorValue = createAction(CHANGE_EDITOR_VALUE)
