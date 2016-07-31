import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Preview from '../../presentationals/Preview'

class PreviewContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    previewState: ImmutablePropTypes.map,
    libraryState: ImmutablePropTypes.map,
    editorState: ImmutablePropTypes.map,
  }

  render() {
    const { dispatch, previewState, libraryState, editorState, ...other } = this.props
    const isHidden = previewState.get('isHidden')
    const currentArticle = libraryState.get('currentArticle')
    const scrollPercentage = editorState.get('scrollPercentage')

    return (
      <Preview
        {...other}
        isHidden={isHidden}
        article={currentArticle}
        scrollPercentage={scrollPercentage}
      />
    )
  }
}

export default connect((state) => ({
  previewState: state.get('previewState'),
  libraryState: state.get('libraryState'),
  editorState: state.get('editorState'),
}))(PreviewContainer)
