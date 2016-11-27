import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
  text: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const HeadingIcon = ({ text, fill, ...other }) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    {...other}
  >
    <g fill={fill}>
      <rect x="3" y="6" width="2" height="12"></rect>
      <rect x="9" y="6" width="2" height="12"></rect>
      <rect x="5" y="11" width="4" height="2"></rect>
      <text fontSize="16" fontWeight="500">
        <tspan x="14" y="17.5">{text}</tspan>
      </text>
    </g>
  </svg>
)

HeadingIcon.propTypes = propTypes
HeadingIcon.defaultProps = defaultProps

export default HeadingIcon
