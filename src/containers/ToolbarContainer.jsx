import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Toolbar from '../presentationals/Toolbar'

import { togglePreviewAction } from '../actions/previewActions'
import { toggleToolbarAction } from '../actions/toolbarActions'
import {
  addCmdAction,
  toggleLibraryAction,
} from '../actions/libraryActions'
import { setEditorFocusedAction } from '../actions/editorActions'

class ToolbarContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    toolbarState: ImmutablePropTypes.map,
    libraryState: ImmutablePropTypes.map,
  }

  onCmdBtnClick = cmd => {
    const { dispatch } = this.props
    const selectionStart = global.editor.selectionStart
    const newCmd = cmd
    newCmd.selectionStart = selectionStart

    dispatch(addCmdAction(newCmd))
    // dispatch(setEditorFocusedAction(true))
  }

  onLibraryToggle = () => this.props.dispatch(toggleLibraryAction())

  onPreviewToggle = () => this.props.dispatch(togglePreviewAction())

  onToolbarToggle = () => this.props.dispatch(toggleToolbarAction())

  render() {
    const props = { ...this.props }
    delete props.dispatch
    delete props.libraryState
    const { toolbarState, ...other } = props
    const isHidden = toolbarState.get('isHidden')

    return (
      <Toolbar
        {...other}
        isHidden={isHidden}
        onLibraryToggle={this.onLibraryToggle}
        onPreviewToggle={this.onPreviewToggle}
        onToolbarToggle={this.onToolbarToggle}
        onCmdBtnClick={this.onCmdBtnClick}
      />
    )
  }
}

export default connect((state) => ({
  toolbarState: state.get('toolbarState'),
  libraryState: state.get('libraryState'),
}))(ToolbarContainer)
