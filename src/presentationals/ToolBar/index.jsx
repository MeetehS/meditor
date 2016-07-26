import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {

}

const ToolBar = ({ ...other }) => (
  <div className={styles.container}>
    <button className={styles.showOrHideLibraryBtn} />

    <button className={styles.toolBarBtn} title="add a blank line, then write your word">P</button>
    <button className={styles.toolBarBtn} title="# add your h1 here">H1</button>
    <button className={styles.toolBarBtn} title="## add your h2 here">H2</button>
    <button className={styles.toolBarBtn} title="### add your h3 here">H3</button>
    <button className={styles.toolBarBtn} title="#### add your h4 here">H4</button>
    <button className={styles.toolBarBtn} title="##### add your h5 here">H5</button>
    <button className={styles.toolBarBtn} title="###### add your h6 here">H6</button>
    <button className={styles.toolBarBtn} title="** add your strong here **"><strong>B</strong></button>
    <button className={styles.toolBarBtn} title="* add your em here *"><em>I</em></button>
    <button className={styles.toolBarBtn} title="----------">Hr</button>

    <button className={styles.toolBarBtn} title="1. add your ol here">Ol</button>
    <button className={styles.toolBarBtn} title="* add your ul here">Ul</button>
    <button className={styles.toolBarBtn} title="\> add your blockquote here">Blockquote</button>

    <button className={styles.toolBarBtn} title="[add your link title here](link here)">Link</button>
    <button className={styles.toolBarBtn} title="[add your image alt here](image link here)">Image</button>
    <button className={styles.toolBarBtn} title="` add your code here `">Code</button>

    <button className={styles.showOrHideToolBarBtn} />
    <button className={styles.showOrHidePreviewBtn} />
  </div>
)

ToolBar.propTypes = propTypes

export default ToolBar
