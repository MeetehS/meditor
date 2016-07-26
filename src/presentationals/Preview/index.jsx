import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {

}

const Preview = ({ className, ...other }) => (
  <div className={`${styles.wrapper} ${className}`}>

  </div>
)

Preview.propTypes = propTypes

export default Preview
