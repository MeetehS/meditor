import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import styles from './index.css'

class Editor extends Component {
  static propTypes = {
    className: PropTypes.string,
    // article: PropTypes.object,
  }

  componentWillUpdate = () => {
    const textarea = this.refs.textarea

    this.selectionStart = textarea.selectionStart
  }

  componentDidUpdate() {
    const { article } = this.props
    if (article.get('id') !== this.articleID) {
      this.cmdsLen = 0
      this.articleID = article.get('id')
      return
    }
    const cmds = article.get('cmds')
    const textarea = this.refs.textarea
    console.info('cmds is ', cmds)
    const cmdsLen = cmds.size
    console.info('cmdsLen is ', cmdsLen)
    console.info('this.cmdsLen is ', this.cmdsLen)
    // 通过比较 cmdsLen 来判断是否是新命令
    if (cmdsLen > this.cmdsLen) {
      this.cmdsLen = cmdsLen
      const latestCmd = cmds.get(cmdsLen - 1)
      console.info('latestCmd is ', latestCmd)
      console.info('selectionStart is ', latestCmd.getIn(['selectionRange', 0]))
      console.info('selectionEnd is ', latestCmd.getIn(['selectionRange', 1]))
      textarea.setSelectionRange(this.selectionStart + latestCmd.getIn(['selectionRange', 0]),
        this.selectionStart + latestCmd.getIn(['selectionRange', 1]))
      textarea.focus()
    }
  }

  selectionStart = 0
  articleID = -1
  cmdsLen = 0

  render() {
    const { className, article, ...other } = this.props

    return (
      <textarea
        ref="textarea"
        className={`${styles.wrapper} ${className}`}
        value={article && article.get('content')}
        placeholder="Write here"
        // autoFocus
        {...other}
      />
    )
  }
}

export default Editor
