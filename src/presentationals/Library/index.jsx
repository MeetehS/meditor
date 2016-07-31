import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import SearchBar from '../SearchBar'

import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  articles: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  currentArticle: ImmutablePropTypes.map,
  searchText: PropTypes.string,
  searchArticles: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  onAddBtnClick: PropTypes.func,
  onArticleListItemClick: PropTypes.func,
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
  searchArticles,
  onAddBtnClick,
  onArticleSelect,
  onSearch,
  ...other,
}) => {
  const onClick = articleID => onArticleSelect(articleID)

  return (isHidden ? null : (
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
            className={article.get('id') === currentArticle.get('id') && styles.active}
            onClick={() => onClick(article.get('id'))}
          >
            {article.get('title')}
          </li>
        ))}
      </ol>
    </div>
  ))
}

Library.propTypes = propTypes
Library.defaultProps = defaultProps

export default Library
