import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'

import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'balloon-css/balloon.min.css'

import App from './containers/App'

const localStorageState = localStorage.getItem('state')
const store = configureStore(JSON.parse(localStorageState))

const container = document.createElement('div')
document.body.appendChild(container)

render((
  <Provider store={store}>
    <App />
  </Provider>
), container)
