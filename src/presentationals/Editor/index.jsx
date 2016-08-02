import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import styles from './index.css'

class Editor extends Component {
  static propTypes = {
    className: PropTypes.string,
    article: ImmutablePropTypes.map,
    isFocused: PropTypes.bool,
    onChangeText: PropTypes.func,
    onScroll: PropTypes.func,
    getEditor: PropTypes.func,
    onFinishCmd: PropTypes.func,
  }

  componentDidMount() {
    global.editor = this.refs.textarea
  }

  componentDidUpdate() {
    const { isFocused } = this.props
    if (isFocused) {
      const textarea = this.refs.textarea
      const { article, onFinishCmd } = this.props
      const { cmd } = article.toJS()
      if (cmd) {
        const { selectionStart, selectionRange } = cmd
        onFinishCmd()

        textarea.setSelectionRange(selectionStart + selectionRange[0],
          selectionStart + selectionRange[1])
      }
      textarea.focus()
    }
  }

  onScroll = event => {
    const { scrollHeight, scrollTop, offsetHeight } = event.target
    const scrollPercentage = scrollTop / (scrollHeight - offsetHeight)
    this.props.onScroll(scrollPercentage)
  }

  render() {
    const props = { ...this.props }
    delete props.onScroll
    delete props.onFinishCmd
    delete props.isFocused
    const { className, article, onChangeText, onFocus, onBlur, ...other } = props

    return (
      <textarea
        {...other}
        ref="textarea"
        className={`${styles.wrapper} ${className}`}
        value={article && article.get('content')}
        placeholder="Enjoy..."
        autoFocus
        onChange={e => onChangeText(e.target.value)}
        onScroll={this.onScroll}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}

export default Editor
