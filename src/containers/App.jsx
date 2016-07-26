import React, { PropTypes } from 'react'

const propTypes = {
  children: PropTypes.node,
}

const App = ({ children }) => (
  <div>{children}</div>
)

App.propTypes = propTypes

export default App
