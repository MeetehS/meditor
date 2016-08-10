import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Preview from '../presentationals/Preview'

class PreviewContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    previewState: ImmutablePropTypes.map,
    libraryState: ImmutablePropTypes.map,
    editorState: ImmutablePropTypes.map,
  }

  render() {
    const props = { ...this.props }
    delete props.dispatch
    const { previewState, libraryState, editorState, ...other } = props
    const { isHidden } = previewState.toJS()
    const { currentArticle } = libraryState.toJS()
    const { scrollPercentage } = editorState.toJS()

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
