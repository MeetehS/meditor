import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddle from 'redux-promise'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import reducers from './reducers'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import 'normalize.css/normalize.css'

const loggerMiddleware = createLogger()

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
