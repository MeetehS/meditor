import React, { PropTypes } from 'react'
import styles from './index.css'
import ICON_OL from '../../imgs/ordered_list.png'
import ICON_UL from '../../imgs/unordered_list.png'
import ICON_LINK from '../../imgs/link.png'
import ICON_IMG from '../../imgs/image.png'

const propTypes = {
  className: PropTypes.string,
  onToolBarBtnClick: PropTypes.func,
  onLibraryToggle: PropTypes.func,
  onPreviewToggle: PropTypes.func,
  onToolBarToggle: PropTypes.func,
}

const toolBarBtns = [{
  name: 'H1',
  title: '一级标题',
  cmd: '# 一级标题',
  selectionRange: [2, 6],
}, {
  name: 'H2',
  title: '二级标题',
  cmd: '## 二级标题',
  selectionRange: [3, 7],
}, {
  name: 'H3',
  title: '三级标题',
  cmd: '### 三级标题',
  selectionRange: [4, 8],
}, {
  name: 'H4',
  title: '四级标题',
  cmd: '#### 四级标题',
  selectionRange: [5, 9],
}, {
  name: 'H5',
  title: '五级标题',
  cmd: '##### 五级标题',
  selectionRange: [6, 10],
}, {
  name: 'H6',
  title: '六级标题',
  cmd: '###### 六级标题',
  selectionRange: [7, 11],
}, {
  name: '--',
  title: '分隔线',
  cmd: '---',
  selectionRange: [3, 3],
}, {
  name: 'Ol',
  title: '有序列表',
  cmd: '1. 有序列表',
  selectionRange: [3, 7],
  image: ICON_OL,
}, {
  name: 'Ul',
  title: '无序列表',
  cmd: '* 无序列表',
  selectionRange: [2, 6],
  image: ICON_UL,
}, {
  name: '“”',
  title: '引用',
  cmd: '> 引用',
  selectionRange: [2, 4],
}, {
  name: 'B',
  title: '粗体',
  cmd: '** 粗体 **',
  selectionRange: [3, 5],
}, {
  name: 'I',
  title: '重点',
  cmd: '_ 重点 _',
  selectionRange: [2, 4],
}, {
  name: 'Link',
  title: '链接',
  cmd: '[链接描述](链接)',
  selectionRange: [7, 9],
  image: ICON_LINK,
}, {
  name: 'Image',
  title: '图片',
  cmd: '![图片描述](网址)',
  selectionRange: [8, 10],
  image: ICON_IMG,
}]

function setInnerHTML(name, image) {
  if (name === 'B') {
    return { __html: '<strong>B</strong>' }
  } else if (name === 'I') {
    return { __html: '<em>I</em>' }
  } else if (image === undefined) {
    return { __html: name }
  }
  return { __html: '' }
}

const ToolBar = ({
  className,
  toolbar,
  onToolBarBtnClick,
  onLibraryToggle,
  onPreviewToggle,
  onToolBarToggle,
  ...other,
}) => (toolbar.get('isOpen') ? (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <button className={styles.toggleLibraryBtn} onClick={onLibraryToggle} />

    {toolBarBtns.map((btn, index) => {
      const { name, image, title } = btn

      return (
        <button
          key={index}
          className={styles.toolBarBtn}
          title={title}
          onClick={() => onToolBarBtnClick(btn)}
          style={image && { backgroundImage: `url(${image})` }}
          dangerouslySetInnerHTML={setInnerHTML(name, image)}
        />
      )
    })}

    <button className={styles.toggleToolBarBtn} onClick={onToolBarToggle} />
    <button className={styles.togglePreviewBtn} onClick={onPreviewToggle} />
  </div>
) : null)

ToolBar.propTypes = propTypes

export default ToolBar
