import React, { PropTypes } from 'react'
import marked from 'marked'
import styles from './index.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
})

const propTypes = {
  className: PropTypes.string,
}

const Preview = ({ className, article, ...other }) => (
  <div
    className={`markdown-body ${styles.wrapper} ${className}`}
    dangerouslySetInnerHTML={{ __html: marked(article.get('content')) }}
  />
)

Preview.propTypes = propTypes

export default Preview
