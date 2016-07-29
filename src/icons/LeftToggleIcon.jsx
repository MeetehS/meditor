import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  width: 24,
  height: 24,
}

const LeftToggleIcon = ({ ...other }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    {...other}
  >
    <title>show or hide library</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <polygon id="path-1" points="0 4 10.2537672 4 24 4 24 20 0 20"></polygon>
      <mask
        id="mask-2"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="24"
        height="16"
        fill="white"
      >
        <use xlinkHref="#path-1"></use>
      </mask>
    </defs>
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
      <g id="show-or-hide-library">
        <use id="Body" stroke="#FFFFFF" mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1" />
        <rect id="Left" fill="#FFFFFF" x="4" y="8" width="2" height="8"></rect>
      </g>
    </g>
  </svg>
)

LeftToggleIcon.propTypes = propTypes
LeftToggleIcon.defaultProps = defaultProps

export default LeftToggleIcon
