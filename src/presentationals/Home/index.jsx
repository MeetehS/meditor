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
    // articles: PropTypes.arrayOf(PropTypes.object),
    onEdit: PropTypes.func,
    onAddBtnClick: PropTypes.func,
    onArticleListItemClick: PropTypes.func,
    onToolBarBtnClick: PropTypes.func,
    onLibraryToggle: PropTypes.func,
    onPreviewToggle: PropTypes.func,
    onToolBarToggle: PropTypes.func,
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
    const {
      articles,
      library,
      preview,
      toolbar,
      onAddBtnClick,
      onArticleListItemClick,
      onEdit,
      onToolBarBtnClick,
      onLibraryToggle,
      onPreviewToggle,
      onToolBarToggle,
    } = this.props
    const { scrollPercentage } = this.state

    let currentArticle

    for (let i = 0; i < articles.size; i++) {
      const article = articles.get(i)
      if (article.get('isOpen')) {
        currentArticle = article
      }
    }

    return (
      <div className={styles.container}>
        <ToolBar
          toolbar={toolbar}
          onToolBarBtnClick={onToolBarBtnClick}
          onLibraryToggle={onLibraryToggle}
          onPreviewToggle={onPreviewToggle}
          onToolBarToggle={onToolBarToggle}
        />

        <div className={styles.content}>
          <Library
            className={styles.library}
            articles={articles}
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
            preview={preview}
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
