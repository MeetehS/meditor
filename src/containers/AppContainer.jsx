import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import Mousetrap from 'mousetrap'

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

    Mousetrap.bind('alt+l', () => dispatch(toggleLibraryAction()))
    Mousetrap.bind('alt+p', () => dispatch(togglePreviewAction()))
    Mousetrap.bind('alt+t', () => dispatch(toggleToolbarAction()))
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
