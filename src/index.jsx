import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'

import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'balloon-css/balloon.min.css'

import AppContainer from './containers/AppContainer'

import { newArticle } from './utils/article'

const openDBReq = indexedDB.open('meditor', 2)

openDBReq.onupgradeneeded = e => {
  console.info('upgradeneeded')
  const db = e.target.result
  global.db = db
  const articlesObjectStore = db.createObjectStore('articles', {
    keyPath: 'id',
    autoIncrement: true,
  })
  // articlesObjectStore.add(newArticle())
}

openDBReq.onsuccess = e => {
  console.info('success')
  const db = e.target.result
  global.db = db
}

openDBReq.onerror = e => console.error('error', e)


const localStorageState = localStorage.getItem('state')
const store = configureStore(JSON.parse(localStorageState))

const container = document.createElement('div')
document.body.appendChild(container)

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), container)
