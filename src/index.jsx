/* @flow */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'

import configureStore from './store'

import { saveState, loadState } from './utils/localStorage'

import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'balloon-css/balloon.min.css'

import AppContainer from './containers/AppContainer'

const persistedState = loadState()
const store = configureStore(persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState().toJS())
}, 1000))

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('app'))
