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
  }

  componentWillReceiveProps = nextProps => {
    const wrapper = this.refs.wrapper
    const { scrollHeight, offsetHeight } = wrapper
    wrapper.scrollTop = nextProps.scrollPercentage * (scrollHeight - offsetHeight)
  }

  render = () => {
    const { className, article, scrollPercentage, ...other } = this.props

    return (
      <div
        ref="wrapper"
        className={`markdown-body ${styles.wrapper} ${className}`}
        dangerouslySetInnerHTML={{ __html: article ? marked(article.get('content')) : '' }}
        {...other}
      />
    )
  }
}

export default Preview
