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

    window.addEventListener('keypress', event => {
      const { altKey, keyCode } = event
      if (altKey) {
        switch (keyCode) {
          case 172:
            dispatch(toggleLibraryAction())
            break
          case 8224:
            dispatch(toggleToolbarAction())
            break
          case 960:
            dispatch(togglePreviewAction())
            break
          default:
            break
        }
      }
    })
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.props.state.toJS()))
  }

  render() {
    return (
      <App />
    )
  }
}

export default connect(state => ({ state }))(AppContainer)
