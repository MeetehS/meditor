import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  // article: PropTypes.object,
}

const Editor = ({ className, article, ...other }) => (
  <textarea
    className={`${styles.wrapper} ${className}`}
    value={article.get('content')}
    placeholder="Write here"
    autoFocus
    {...other}
  />
)

Editor.propTypes = propTypes

export default Editor
