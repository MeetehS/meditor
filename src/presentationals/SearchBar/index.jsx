import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import PlusIcon from '../../imgs/icons/PlusIcon'

class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    search: PropTypes.string,
    onAddBtnClick: PropTypes.func,
    onSearchInputChange: PropTypes.func,
  }

  render = () => {
    const { className, search, onAddBtnClick, onSearchInputChange, ...other } = this.props

    return (
      <div className={`${styles.wrapper} ${className}`} {...other}>
        <input placeholder="Search" value={search} onChange={onSearchInputChange} />
        <button className={styles.addBtn} onClick={onAddBtnClick}>
          <PlusIcon />
        </button>
      </div>
    )
  }
}

export default SearchBar
