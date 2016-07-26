import React, { Component, PropTypes } from 'react'
import styles from './index.css'

class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render = () => {
    const { className, onAddBtnClick, ...other } = this.props

    return (
      <div className={`${styles.wrapper} ${className}`} {...other}>
        <input placeholder="Search" />
        <button className={styles.addBtn} onClick={onAddBtnClick} />
      </div>
    )
  }
}

export default SearchBar
