import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import { getyyyymmddhhMMss } from '../../utils/date'
import ToolBar from '../ToolBar'
import Library from '../Library'
import Editor from '../Editor'
import Preview from '../Preview'
import styles from './index.css'

class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    // library: PropTypes.arrayOf(PropTypes.object),
    onEdit: PropTypes.func,
    onAddBtnClick: PropTypes.func,
    onArticleListItemClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      scrollPercentage: 0,
    }
  }

  onEditorScroll = (event) => {
    const { scrollHeight, scrollTop, offsetHeight } = event.target
    this.setState({
      scrollPercentage: scrollTop / (scrollHeight - offsetHeight),
    })
  }

  render = () => {
    const { library, onAddBtnClick, onArticleListItemClick, onEdit } = this.props
    const { scrollPercentage } = this.state

    let currentArticle

    for (let i = 0; i < library.size; i++) {
      const article = library.get(i)
      if (article.get('isOpen')) {
        currentArticle = article
      }
    }

    return (
      <div className={styles.container}>
        <ToolBar />

        <div className={styles.content}>
          <Library
            className={styles.library}
            library={library}
            onAddBtnClick={onAddBtnClick}
            onArticleListItemClick={onArticleListItemClick}
          />

          <Editor
            className={styles.editor}
            onChange={onEdit}
            onScroll={this.onEditorScroll}
            article={currentArticle}
          />

          <Preview
            className={styles.preview}
            article={currentArticle}
            scrollPercentage={scrollPercentage}
          />
        </div>
      </div>
    )
  }
}

export default Home
