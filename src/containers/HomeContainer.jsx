import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import { getyyyymmddhhMMss } from '../utils/date'
import {
  getArticles,
  addArticle,
  selectArticleListItem,
  changeEditorValue,
  appendCmd,
} from '../actions/articlesActions'
import { toggleLibrary } from '../actions/libraryActions'
import { togglePreview } from '../actions/previewActions'
import { toggleToolBar } from '../actions/toolbarActions'
import Home from '../presentationals/Home'

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    onKeyDown: PropTypes.func,
  }

  componentDidMount() {
    const { dispatch, articles } = this.props

    const storagedArticles = JSON.parse(localStorage.getItem('articles'))
    if (storagedArticles !== null) {
      this.props.dispatch(getArticles(fromJS(storagedArticles)))
    } else if (articles.size === 0) {
      dispatch(addArticle(fromJS(this.newArticle())))
    }

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.props.dispatch(toggleToolBar())
      }
    })
  }

  onAddBtnClick = () => this.props.dispatch(addArticle(fromJS(this.newArticle())))

  onArticleListItemClick = (articleID) => this.props.dispatch(selectArticleListItem(articleID))

  onEdit = (event) => this.props.dispatch(changeEditorValue(event.target.value))

  onToolBarBtnClick = (cmd) => this.props.dispatch(appendCmd(fromJS(cmd)))

  onLibraryToggle = () => this.props.dispatch(toggleLibrary())

  onPreviewToggle = () => this.props.dispatch(togglePreview())

  onToolBarToggle = () => this.props.dispatch(toggleToolBar())

  newArticle = () => ({
    id: Math.abs(Math.random() * 10000),
    title: 'write here',
    content: 'write here',
    created_at: getyyyymmddhhMMss(new Date()),
    updated_at: getyyyymmddhhMMss(new Date()),
    isOpen: true,
    cmds: [],
  })

  render() {
    return (
      <Home
        onAddBtnClick={this.onAddBtnClick}
        onArticleListItemClick={this.onArticleListItemClick}
        onEdit={this.onEdit}
        onToolBarBtnClick={this.onToolBarBtnClick}
        onLibraryToggle={this.onLibraryToggle}
        onPreviewToggle={this.onPreviewToggle}
        onToolBarToggle={this.onToolBarToggle}
        {...this.props}
      />
    )
  }
}

export default connect((state) => ({
  articles: state.get('articles'),
  library: state.get('library'),
  preview: state.get('preview'),
  toolbar: state.get('toolbar'),
}))(HomeContainer)
