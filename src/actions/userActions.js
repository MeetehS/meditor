import { createAction } from 'redux-actions'
import { API_GET_GITHUB_USER_BY_USERNAME } from '../constants/apis'
import { GET_GITHUB_USER_BY_USERNAME } from '../constants/actionTypes'

export const getGitHubUserByUsername = createAction(GET_GITHUB_USER_BY_USERNAME, async username => {
  try {
    const response = await fetch(`${API_GET_GITHUB_USER_BY_USERNAME}/${username}`)
    const responseJSON = await response.json()
    return responseJSON
  } catch (e) {
    return e
  }
})
