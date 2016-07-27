import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  onToolBarBtnClick: PropTypes.func,
}

const toolBarBtns = [{
  name: 'H1',
  cmd: '# add your h1 here',
  selectionRange: [2, 18],
}, {
  name: 'H2',
  cmd: '## add your h2 here',
  selectionRange: [3, 19],
}, {
  name: 'H3',
  cmd: '### add your h3 here',
  selectionRange: [4, 20],
}, {
  name: 'H4',
  cmd: '#### add your h4 here',
  selectionRange: [5, 21],
}, {
  name: 'H5',
  cmd: '##### add your h5 here',
  selectionRange: [6, 22],
}, {
  name: 'H6',
  cmd: '###### add your h6 here',
  selectionRange: [7, 23],
}, {
  name: 'B',
  cmd: '** add your strong here **',
  selectionRange: [3, 23],
}, {
  name: 'I',
  cmd: '_ add your em here _',
  selectionRange: [2, 18],
}, {
  name: 'Hr',
  cmd: '---',
  selectionRange: [3, 3],
}, {
  name: 'Ol',
  cmd: '1. add your ol here',
  selectionRange: [3, 19],
}, {
  name: 'Ul',
  cmd: '* add your ul here',
  selectionRange: [2, 18],
}, {
  name: 'Blockquote',
  cmd: '> add your blockquote here',
  selectionRange: [2, 26],
}, {
  name: 'Link',
  cmd: '[add your link title here](link here)',
  selectionRange: [27, 36],
}, {
  name: 'Image',
  cmd: '![add your image alt here](image link here)',
  selectionRange: [27, 42],
}, {
  name: 'Code',
  cmd: '` add your code here `',
  selectionRange: [2, 20],
}]

const ToolBar = ({ className, onToolBarBtnClick, ...other }) => (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <button className={styles.showOrHideLibraryBtn} />

    {toolBarBtns.map((btn, index) => (
      <button
        key={index}
        className={styles.toolBarBtn}
        title={btn.cmd}
        onClick={() => onToolBarBtnClick(btn)}
      >
        {btn.name}
      </button>
    ))}

    <button className={styles.showOrHideToolBarBtn} />
    <button className={styles.showOrHidePreviewBtn} />
  </div>
)

ToolBar.propTypes = propTypes

export default ToolBar
