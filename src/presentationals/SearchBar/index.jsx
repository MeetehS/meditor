import React, { PropTypes } from 'react'
import PlusIcon from '../../icons/PlusIcon'

import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onAddBtnClick: PropTypes.func,
  onSearch: PropTypes.func,
}

const SearchBar = ({
  className,
  text,
  onAddBtnClick,
  onSearch,
  ...other,
}) => (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <input placeholder="Search" value={text} onChange={event => onSearch(event.target.value)} />
    <button className={styles.addBtn} onClick={onAddBtnClick}>
      <PlusIcon />
    </button>
  </div>
)

SearchBar.propTypes = propTypes

export default SearchBar
