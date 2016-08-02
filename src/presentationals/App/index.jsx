import React from 'react'

import ToolbarContainer from '../../containers/ToolbarContainer'
import LibraryContainer from '../../containers/LibraryContainer'
import EditorContainer from '../../containers/EditorContainer'
import PreviewContainer from '../../containers/PreviewContainer'

import styles from './index.css'

const App = () => (
  <div className={styles.container}>
    <ToolbarContainer />

    <div className={styles.content}>
      <LibraryContainer className={styles.library} />

      <EditorContainer className={styles.editor} />

      <PreviewContainer className={styles.preview} />
    </div>
  </div>
)

export default App
