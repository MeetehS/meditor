/* @flow */
import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

import Preview from '../presentationals/Preview'

const propTypes = {
  dispatch: PropTypes.func,
  previewState: ImmutablePropTypes.map,
  libraryState: ImmutablePropTypes.map,
  editorState: ImmutablePropTypes.map,
}

const PreviewContainer = props => {
  const newProps = { ...props }
  delete newProps.dispatch
  const { previewState, libraryState, editorState, ...other } = newProps
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

PreviewContainer.propTypes = propTypes

export default connect((state) => ({
  previewState: state.get('previewState'),
  libraryState: state.get('libraryState'),
  editorState: state.get('editorState'),
}))(PreviewContainer)
