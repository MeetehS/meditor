import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Editor from '../presentationals/Editor'

import {
  addArticleAction,
  selectArticleAction,
  editArticleAction,
  addCmdAction,
  finishCmdAction,
} from '../actions/libraryActions'
import { scrollEditorAction, setEditorFocusedAction } from '../actions/editorActions'

import { newArticle } from '../utils/article'

class EditorContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    editorState: ImmutablePropTypes.map,
    libraryState: ImmutablePropTypes.map,
  }

  onChangeText = text => this.editArticle(text)

  onFinishCmd = () => this.props.dispatch(finishCmdAction())

  onScroll = percentage => this.props.dispatch(scrollEditorAction(percentage))

  onFocus = () => this.props.dispatch(setEditorFocusedAction(true))

  onBlur = () => this.props.dispatch(setEditorFocusedAction(false))

  onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const { dispatch, libraryState } = this.props
      const currentArticle = libraryState.get('currentArticle')
      const selectionStart = global.editor.selectionStart
      const newCmd = {
        content: '\t',
        selectionRange: [1, 1],
      }
      newCmd.selectionStart = selectionStart

      if (currentArticle.size === 0) {
        const article = newArticle()
        dispatch(addArticleAction(article))
        dispatch(selectArticleAction(article.id))
        dispatch(setEditorFocusedAction(true))
      }
      dispatch(addCmdAction(newCmd))
    }
  }

  editArticle = text => {
    const { dispatch, libraryState } = this.props
    const currentArticle = libraryState.get('currentArticle')

    if (currentArticle.size === 0) {
      const article = newArticle(text)
      dispatch(addArticleAction(article))
      return dispatch(selectArticleAction(article.id))
    }
    return dispatch(editArticleAction(text))
  }

  render() {
    const props = { ...this.props }
    delete props.dispatch
    const { editorState, libraryState, ...other } = props
    const { isFocused } = editorState.toJS()
    const currentArticle = libraryState.get('currentArticle')

    return (
      <Editor
        {...other}
        article={currentArticle}
        isFocused={isFocused}
        onChangeText={this.onChangeText}
        onScroll={this.onScroll}
        onFinishCmd={this.onFinishCmd}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default connect((state) => ({
  libraryState: state.get('libraryState'),
  editorState: state.get('editorState'),
}))(EditorContainer)
