import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const HrIcon = ({ fill, ...other }) => (
  <svg
    version="1.1"
    
    viewBox="0 0 24 24"
    {...other}
  >
    <g fill={fill}>
      <rect x="2" y="11" width="6" height="2"></rect>
      <rect x="9" y="11" width="6" height="2"></rect>
      <rect x="16" y="11" width="6" height="2"></rect>
    </g>
  </svg>
)

HrIcon.propTypes = propTypes
HrIcon.defaultProps = defaultProps

export default HrIcon
