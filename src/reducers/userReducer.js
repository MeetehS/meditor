import { handleActions } from 'redux-actions'
import { GET_GITHUB_USER_BY_USERNAME } from '../constants/actionTypes'

const defaultState = {}

const getGitHubUserByUsernameReducer = handleActions({
  GET_GITHUB_USER_BY_USERNAME: (state, { payload }) => ({ ...state, ...payload }),
}, defaultState)

export default getGitHubUserByUsernameReducer
