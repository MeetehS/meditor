import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  width: 20,
  height: 20,
}

const PlusIcon = ({ ...other }) => (
  <svg
    version="1.1"
    viewBox="0 0 20 20"
    {...other}
  >
    <g fill="#F9A656">
      <polygon points="0 9 8.54480598 9 20 9 20 11 0 11"></polygon>
      <rect x="9" y="0" width="2" height="20"></rect>
    </g>
  </svg>
)

PlusIcon.propTypes = propTypes
PlusIcon.defaultProps = defaultProps

export default PlusIcon
