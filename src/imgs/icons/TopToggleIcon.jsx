import React, { PropTypes } from 'react'

const propTypes = {
  fill: PropTypes.string,
}

const defaultProps = {
  width: 24,
  height: 24,
}

const TopToggleIcon = ({ ...other }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" {...other}>
    <title>TopToggle</title>
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
      <g id="TopToggle">
        <use id="Body" stroke="#FFFFFF" mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1" />
        <rect
          id="Top"
          fill="#FFFFFF"
          transform="translate(12.000000, 9.000000) rotate(-90.000000)
          translate(-12.000000, -9.000000) " x="11" y="1" width="2" height="16"
        />
      </g>
    </g>
  </svg>
)

TopToggleIcon.propTypes = propTypes
TopToggleIcon.defaultProps = defaultProps

export default TopToggleIcon
