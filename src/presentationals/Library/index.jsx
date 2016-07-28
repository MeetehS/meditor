import React, { PropTypes } from 'react'
import SearchBar from '../SearchBar'
import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  // articles: PropTypes.arrayOf(PropTypes.object),
  onAddBtnClick: PropTypes.func,
  onArticleListItemClick: PropTypes.func,
}

const Library = ({
  className,
  articles,
  library,
  onAddBtnClick,
  onArticleListItemClick,
  ...other,
}) => (library.get('isOpen') ? (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <SearchBar className={styles.searchBar} onAddBtnClick={onAddBtnClick} />

    <ol className={styles.listView}>
      {articles.map((article, index) => {
        if (article.get('isOpen')) {
          return (
            <li
              key={index}
              className={styles.active}
              onClick={() => onArticleListItemClick(article.get('id'))}
            >
              {article.get('title')}
            </li>
          )
        }

        return (
          <li
            key={index}
            onClick={() => onArticleListItemClick(article.get('id'))}
          >
            {article.get('title')}
          </li>
        )
      })}
    </ol>
  </div>
) : null)

Library.propTypes = propTypes

export default Library
