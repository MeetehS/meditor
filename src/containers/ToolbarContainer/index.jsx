import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Toolbar from '../../presentationals/Toolbar'

import { togglePreviewAction } from '../../actions/previewActions'
import { toggleToolbarAction } from '../../actions/toolbarActions'
import {
  addArticleAction,
  selectArticleAction,
  addCmdAction,
  toggleLibraryAction,
} from '../../actions/libraryActions'

import { newArticle } from '../../utils/article'

class ToolbarContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    toolbarState: ImmutablePropTypes.map,
    libraryState: ImmutablePropTypes.map,
  }

  onCmdBtnClick = cmd => {
    const { dispatch, libraryState } = this.props
    const currentArticle = libraryState.get('currentArticle')
    const selectionStart = global.editor.selectionStart
    const newCmd = cmd
    newCmd.selectionStart = selectionStart

    if (currentArticle.size === 0) {
      const article = newArticle()
      dispatch(addArticleAction(article))
      dispatch(selectArticleAction(article.id))
    }
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
  libraryState: state.get('libraryState'),
}))(ToolbarContainer)
