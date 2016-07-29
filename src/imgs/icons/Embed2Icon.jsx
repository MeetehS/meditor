import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  fill: '#fff',
  width: 24,
  height: 24,
}

const Embed2Icon = ({ fill, ...other }) => (
  <svg
    version="1.1"

    viewBox="0 0 24 24"
    {...other}
  >
    <path fill={fill} d="M19.5 17.25l2.25 2.25 7.5-7.5-7.5-7.5-2.25 2.25 5.25 5.25z"></path>
    <path fill={fill} d="M10.5 6.75l-2.25-2.25-7.5 7.5 7.5 7.5 2.25-2.25-5.25-5.25z"></path>
    <path fill={fill} d="M16.437 3.528l1.628 0.444-4.5 16.501-1.628-0.444 4.5-16.501z"></path>
  </svg>
)

Embed2Icon.propTypes = propTypes
Embed2Icon.defaultProps = defaultProps

export default Embed2Icon
