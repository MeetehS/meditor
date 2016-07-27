import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import { getyyyymmddhhMMss } from '../utils/date'
import {
  getArticles,
  addArticle,
  selectArticleListItem,
  changeEditorValue,
} from '../actions/libraryActions'
import Home from '../presentationals/Home'

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentDidMount = () => {
    const { dispatch, library } = this.props

    const storagedLibrary = JSON.parse(localStorage.getItem('library'))
    if (storagedLibrary !== null) {
      console.log('storagedLibrary is ', storagedLibrary)
      this.props.dispatch(getArticles(fromJS(storagedLibrary)))
    } else if (library.size === 0) {
      dispatch(addArticle(fromJS(this.newArticle())))
    }
  }

  onAddBtnClick = () => this.props.dispatch(addArticle(fromJS(this.newArticle())))

  onArticleListItemClick = (articleID) => this.props.dispatch(selectArticleListItem(articleID))

  onEdit = (event) => this.props.dispatch(changeEditorValue(event.target.value))

  newArticle = () => ({
    id: Math.abs(Math.random() * 10000),
    title: 'write here',
    content: 'write here',
    created_at: getyyyymmddhhMMss(new Date()),
    updated_at: getyyyymmddhhMMss(new Date()),
    isOpen: true,
  })

  render() {
    return (
      <Home
        onAddBtnClick={this.onAddBtnClick}
        onArticleListItemClick={this.onArticleListItemClick}
        onEdit={this.onEdit}
        {...this.props}
      />
    )
  }
}

export default connect((state) => ({
  library: state.get('library'),
}))(HomeContainer)
