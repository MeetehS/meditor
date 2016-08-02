import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import marked from 'marked'
import styles from './index.css'

class Preview extends Component {
  static propTypes = {
    className: PropTypes.string,
    isHidden: PropTypes.bool,
    article: ImmutablePropTypes.map,
    scrollPercentage: PropTypes.number,
  }

  componentDidUpdate() {
    const { isHidden, scrollPercentage } = this.props

    if (!isHidden) {
      const wrapper = this.refs.wrapper
      const { scrollHeight, offsetHeight } = wrapper
      wrapper.scrollTop = scrollPercentage * (scrollHeight - offsetHeight)
    }
  }

  render = () => {
    const props = { ...this.props }
    delete props.scrollPercentage
    const { className, isHidden, article, ...other } = props

    return isHidden ? null : (
      <div
        ref="wrapper"
        className={`markdown-body ${styles.wrapper} ${className}`}
        dangerouslySetInnerHTML={{ __html: article.size > 0 ? marked(article.get('content')) : '' }}
        {...other}
      />
    )
  }
}

export default Preview
