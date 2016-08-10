import React, { PropTypes } from 'react'

import SearchBar from '../SearchBar'

import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  articles: PropTypes.arrayOf(PropTypes.object),
  currentArticle: PropTypes.object,
  searchText: PropTypes.string,
  onAddBtnClick: PropTypes.func,
  onSearch: PropTypes.func,
  onArticleSelect: PropTypes.func,
}

const defaultProps = {
  isHidden: false,
}

const Library = ({
  className,
  isHidden,
  articles,
  currentArticle,
  searchText,
  onAddBtnClick,
  onArticleSelect,
  onSearch,
  ...other,
}) => (isHidden ? null : (
  <div {...other} className={`${styles.wrapper} ${className}`}>
    <SearchBar
      text={searchText}
      onSearch={onSearch}
      onAddBtnClick={onAddBtnClick}
    />

    <ol className={styles.listView}>
      {articles.map((article, index) => (
        <li
          key={index}
          className={article.content === currentArticle.content && styles.active}
          onClick={() => onArticleSelect(article)}
        >
          {article.title}
        </li>
      ))}
    </ol>
  </div>
))

Library.propTypes = propTypes
Library.defaultProps = defaultProps

export default Library
