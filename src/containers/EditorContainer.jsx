import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Editor from '../presentationals/Editor'

import {
  addArticleAction,
  selectArticleAction,
  editArticleAction,
  finishCmdAction,
} from '../actions/libraryActions'
import { scrollEditorAction } from '../actions/editorActions'

import { newArticle } from '../utils/article'

class EditorContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    libraryState: ImmutablePropTypes.map,
  }

  onChangeText = text => {
    const { dispatch, libraryState } = this.props
    const currentArticle = libraryState.get('currentArticle')

    if (currentArticle.size === 0) {
      const article = newArticle(text)
      dispatch(addArticleAction(article))
      return dispatch(selectArticleAction(article.id))
    }
    return dispatch(editArticleAction(text))
  }

  onFinishCmd = () => this.props.dispatch(finishCmdAction())

  onScroll = percentage => this.props.dispatch(scrollEditorAction(percentage))

  render() {
    const props = { ...this.props }
    delete props.dispatch
    const { libraryState, ...other } = props
    const currentArticle = libraryState.get('currentArticle')

    return (
      <Editor
        {...other}
        article={currentArticle}
        onChangeText={this.onChangeText}
        onScroll={this.onScroll}
        onFinishCmd={this.onFinishCmd}
      />
    )
  }
}

export default connect((state) => ({
  libraryState: state.get('libraryState'),
}))(EditorContainer)
