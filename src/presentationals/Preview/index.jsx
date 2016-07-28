import React, { Component, PropTypes } from 'react'
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

class Preview extends Component {
  static propTypes = {
    className: PropTypes.string,
    scrollPercentage: PropTypes.number,
  }

  componentDidUpdate() {
    const { preview, scrollPercentage } = this.props

    if (preview.get('isOpen')) {
      const wrapper = this.refs.wrapper
      const { scrollHeight, offsetHeight } = wrapper
      wrapper.scrollTop = scrollPercentage * (scrollHeight - offsetHeight)
    }
  }

  render = () => {
    // get scrollPercentage to prevent to be prop of div
    // TODO: issue ESLint by Airbnb
    const { className, article, preview, scrollPercentage, ...other } = this.props

    return preview.get('isOpen') ? (
      <div
        ref="wrapper"
        className={`markdown-body ${styles.wrapper} ${className}`}
        dangerouslySetInnerHTML={{ __html: article ? marked(article.get('content')) : '' }}
        {...other}
      />
    ) : null
  }
}

export default Preview
