import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import { fromJS } from 'immutable'

import reducers from '../reducers'

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
})

export default function configureStore(initialState) {
  return createStore(reducers, fromJS(initialState),
    applyMiddleware(promiseMiddleware, loggerMiddleware))
}
