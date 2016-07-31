import { createStore } from 'redux'
import { fromJS } from 'immutable'

import reducers from '../reducers'

export default function configureStore(initialState) {
  let store
  if (initialState === null) {
    store = createStore(reducers)
  } else {
    store = createStore(reducers, fromJS(initialState))
  }

  return store
}
