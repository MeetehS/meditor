import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddle from 'redux-promise'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Iterable } from 'immutable'
import reducers from './reducers'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'

const loggerMiddleware = createLogger({
  stateTransformer: state => {
    const newState = {}

    for (const i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS()
      } else {
        newState[i] = state[i]
      }
    }

    return newState
  },
})

const store = createStore(reducers,
  applyMiddleware(routerMiddleware(browserHistory), promiseMiddle, loggerMiddleware))

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
})

const container = document.createElement('div')
document.body.appendChild(container)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer} />
      </Route>
    </Router>
  </Provider>
), container)
