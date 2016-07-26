import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import { getyyyymmddhhMMss } from '../utils/date'
import { getArticles, addArticle, changeEditorValue } from '../actions/libraryActions'
import Home from '../presentationals/Home'

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentDidMount = () => this.props.dispatch(getArticles(fromJS([{
    id: 2,
    title: 'Article2',
    content: 'Article2',
    created_at: '2016-07-26 15:58:00',
    updated_at: '2016-07-26 15:58:00',
    isOpen: false,
  }, {
    id: 3,
    title: 'Article3',
    content: 'Article3',
    created_at: '2016-07-26 15:58:00',
    updated_at: '2016-07-26 15:58:00',
    isOpen: false,
  }])))

  onAddBtnClick = () => this.props.dispatch(addArticle(fromJS({
    id: Math.abs(Math.random() * 10000),
    title: 'add title here',
    content: 'add content here',
    created_at: getyyyymmddhhMMss(new Date()),
    updated_at: getyyyymmddhhMMss(new Date()),
    isOpen: true,
  })))

  onEdit = (event) => this.props.dispatch(changeEditorValue(event.target.value))

  render() {
    return (
      <Home onAddBtnClick={this.onAddBtnClick} onEdit={this.onEdit} {...this.props} />
    )
  }
}

export default connect((state) => ({
  library: state.get('library'),
}))(HomeContainer)
