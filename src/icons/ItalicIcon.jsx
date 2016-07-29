import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const ItalicIcon = ({ fill, ...other }) => (
  <svg
    version="1.1"

    viewBox="0 0 16 16"
    {...other}
  >
    <path
      fill={fill}
      d="M14 1v1h-2l-5 12h2v1h-7v-1h2l5-12h-2v-1z"
    />
  </svg>
)

ItalicIcon.propTypes = propTypes
ItalicIcon.defaultProps = defaultProps

export default ItalicIcon
