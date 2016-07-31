import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import ToolbarContainer from '../ToolbarContainer'
import LibraryContainer from '../LibraryContainer'
import EditorContainer from '../EditorContainer'
import PreviewContainer from '../PreviewContainer'

import { toggleToolbarAction } from '../../actions/toolbarActions'

import styles from './index.css'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    state: ImmutablePropTypes.map,
  }

  componentDidMount() {
    const { dispatch } = this.props

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dispatch(toggleToolbarAction())
      }
    })
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.props.state.toJS()))
  }

  render() {
    return (
      <div className={styles.container}>
        <ToolbarContainer />

        <div className={styles.content}>
          <LibraryContainer className={styles.library} />

          <EditorContainer className={styles.editor} />

          <PreviewContainer className={styles.preview} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ state }))(App)
