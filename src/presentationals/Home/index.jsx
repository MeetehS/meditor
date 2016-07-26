import React, { PropTypes } from 'react'
import ToolBar from '../ToolBar'
import Library from '../Library'
import Editor from '../Editor'
import Preview from '../Preview'
import styles from './index.css'

const propTypes = {
  user: PropTypes.object,
  // library: PropTypes.arrayOf(PropTypes.object),
  onEdit: PropTypes.func,
  onAddBtnClick: PropTypes.func,
}

const Home = ({ library, onAddBtnClick, onEdit }) => {
  let currentArticle

  for (let i = 0; i < library.size; i++) {
    const article = library.get(i)
    if (article.get('isOpen')) {
      currentArticle = article
    }
  }

  return (
    <div className={styles.container}>
      <ToolBar />

      <div className={styles.content}>
        <Library className={styles.library} library={library} onAddBtnClick={onAddBtnClick} />

        <Editor className={styles.editor} onChange={onEdit} article={currentArticle} />

        <Preview className={styles.preview} article={currentArticle} />
      </div>
    </div>
  )
}

Home.propTypes = propTypes
export default Home
