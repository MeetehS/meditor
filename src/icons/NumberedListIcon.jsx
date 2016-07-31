import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const NumberedListIcon = ({ fill, ...other }) => (
  <svg
    version="1.1"
    viewBox="0 0 16 16"
    {...other}
  >
    <path
      fill={fill}
      d="M6 13h10v2h-10zM6 7h10v2h-10zM6 1h10v2h-10zM3 0v4h-1v-3h-1v-1zM2
      8.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM4 11v5h-3v-1h2v-1h-2v-1h2v-1h-2v-1z"
    />
  </svg>
)

NumberedListIcon.propTypes = propTypes
NumberedListIcon.defaultProps = defaultProps

export default NumberedListIcon
