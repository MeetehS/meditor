import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
}

const SearchBar = ({ className, onAddBtnClick, ...other }) => (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <input placeholder="Search" />
    <button className={styles.addBtn} onClick={onAddBtnClick} />
  </div>
)

SearchBar.propTypes = propTypes

export default SearchBar
