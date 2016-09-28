import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import { toggleLibraryAction } from '../actions/libraryActions'
import { togglePreviewAction } from '../actions/previewActions'
import { toggleToolbarAction } from '../actions/toolbarActions'

import App from '../presentationals/App'

class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    state: ImmutablePropTypes.map,
  }

  componentDidMount() {
    const { dispatch } = this.props
    document.addEventListener('keydown', (event) => {
      const { key } = event
      switch (key) {
        case '¬':
          event.preventDefault()
          dispatch(toggleLibraryAction())
          break
        case 'π':
          event.preventDefault()
          dispatch(togglePreviewAction())
          break
        case '†':
          event.preventDefault()
          dispatch(toggleToolbarAction())
          break
        default:
          break
      }
    })
  }

  render() {
    return (
      <App />
    )
  }
}

export default connect(state => ({ state }))(AppContainer)
