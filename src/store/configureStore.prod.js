import { createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
import promiseMiddleware from 'redux-promise'

import reducers from '../reducers'

export default function configureStore(initialState) {
  if (!initialState) {
    return createStore(reducers, applyMiddleware(promiseMiddleware))
  }
  return createStore(reducers, fromJS(initialState), applyMiddleware(promiseMiddleware))
}
