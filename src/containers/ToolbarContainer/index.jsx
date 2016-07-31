import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Toolbar from '../../presentationals/Toolbar'

import { addCmdAction, toggleLibraryAction } from '../../actions/libraryActions'
import { togglePreviewAction } from '../../actions/previewActions'
import { toggleToolbarAction } from '../../actions/toolbarActions'

class ToolbarContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    toolbarState: ImmutablePropTypes.map,
  }

  onCmdBtnClick = cmd => {
    const { dispatch, editorState } = this.props
    const selectionStart = global.editor.selectionStart
    const newCmd = cmd
    newCmd.selectionStart = selectionStart
    dispatch(addCmdAction(newCmd))
  }

  onLibraryToggle = () => this.props.dispatch(toggleLibraryAction())

  onPreviewToggle = () => this.props.dispatch(togglePreviewAction())

  onToolbarToggle = () => this.props.dispatch(toggleToolbarAction())

  render() {
    const { dispatch, toolbarState, ...other } = this.props
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
  editorState: state.get('editorState'),
}))(ToolbarContainer)
