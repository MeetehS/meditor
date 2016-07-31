import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { fromJS } from 'immutable'

import reducers from '../reducers'

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
})

export default function configureStore(initialState) {
  let store
  if (initialState === null) {
    store = createStore(reducers,
      applyMiddleware(loggerMiddleware))
  } else {
    store = createStore(reducers, fromJS(initialState), applyMiddleware(loggerMiddleware))
  }

  return store
}
