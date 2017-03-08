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

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   document.addEventListener('keydown', (event) => {
  //     const { key } = event
  //     console.log('key is ', key)
  //     if (key === 'Alt') {
  //       this.altKey = true
  //       return
  //     }
  //     if (this.altKey) {
  //       switch (key) {
  //         case 'l':
  //           event.preventDefault()
  //           dispatch(toggleLibraryAction())
  //           break
  //         case 'p':
  //           event.preventDefault()
  //           dispatch(togglePreviewAction())
  //           break
  //         case 't':
  //           event.preventDefault()
  //           dispatch(toggleToolbarAction())
  //           break
  //         default:
  //           this.altKey = false
  //           break
  //       }
  //     }
  //   })
  // }

  render() {
    return (
      <App />
    )
  }
}

export default connect(state => ({ state }))(AppContainer)
