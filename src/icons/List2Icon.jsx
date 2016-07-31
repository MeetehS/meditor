import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const List2Icon = ({ fill, ...other }) => (
  <svg
    version="1.1"
    viewBox="0 0 16 16"
    {...other}
  >
    <path
      fill={fill}
      d="M6 1h10v2h-10v-2zM6 7h10v2h-10v-2zM6 13h10v2h-10v-2zM0 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0
      1.105-0.895 2-2 2s-2-0.895-2-2zM0 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2
      2s-2-0.895-2-2zM0 14c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"
    />
  </svg>
)

List2Icon.propTypes = propTypes
List2Icon.defaultProps = defaultProps

export default List2Icon
