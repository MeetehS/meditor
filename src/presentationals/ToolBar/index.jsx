import React, { PropTypes } from 'react'
import HeadingIcon from '../../icons/HeadingIcon'
import ImageIcon from '../../icons/ImageIcon'
import LeftQuotesIcon from '../../icons/LeftQuotesIcon'
import NumberedListIcon from '../../icons/NumberedListIcon'
import List2Icon from '../../icons/List2Icon'
import LinkIcon from '../../icons/LinkIcon'
import BoldIcon from '../../icons/BoldIcon'
import ItalicIcon from '../../icons/ItalicIcon'
import HrIcon from '../../icons/HrIcon'
import RightToggleIcon from '../../icons/RightToggleIcon'
import TopToggleIcon from '../../icons/TopToggleIcon'
import LeftToggleIcon from '../../icons/svgs/LeftToggle.svg'

import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  onCmdBtnClick: PropTypes.func,
  onLibraryToggle: PropTypes.func,
  onPreviewToggle: PropTypes.func,
  onToolbarToggle: PropTypes.func,
}

const toolbarBtns = [{
  name: 'H1',
  title: '一级标题',
  cmd: {
    content: '# 一级标题',
    selectionRange: [2, 6],
  },
  icon: <HeadingIcon text="1" />,
}, {
  name: 'H2',
  title: '二级标题',
  cmd: {
    content: '## 二级标题',
    selectionRange: [3, 7],
  },
  icon: <HeadingIcon text="2" />,
}, {
  name: 'H3',
  title: '三级标题',
  cmd: {
    content: '### 三级标题',
    selectionRange: [4, 8],
  },
  icon: <HeadingIcon text="3" />,
}, {
  name: 'H4',
  title: '四级标题',
  cmd: {
    content: '#### 四级标题',
    selectionRange: [5, 9],
  },
  icon: <HeadingIcon text="4" />,
}, {
  name: 'H5',
  title: '五级标题',
  cmd: {
    content: '##### 五级标题',
    selectionRange: [6, 10],
  },
  icon: <HeadingIcon text="5" />,
}, {
  name: 'H6',
  title: '六级标题',
  cmd: {
    content: '###### 六级标题',
    selectionRange: [7, 11],
  },
  icon: <HeadingIcon text="6" />,
}, {
  name: '--',
  title: '分隔线',
  cmd: {
    content: '---',
    selectionRange: [3, 3],
  },
  icon: <HrIcon />,
}, {
  name: 'Ol',
  title: '有序列表',
  cmd: {
    content: '1. 有序列表',
    selectionRange: [3, 7],
  },
  icon: <NumberedListIcon width="16" />,
}, {
  name: 'Ul',
  title: '无序列表',
  cmd: {
    content: '* 无序列表',
    selectionRange: [2, 6],
  },
  icon: <List2Icon width="16" />,
}, {
  name: '“”',
  title: '引用',
  cmd: {
    content: '> 引用',
    selectionRange: [2, 4],
  },
  icon: <LeftQuotesIcon width="16" />,
}, {
  name: 'B',
  title: '粗体',
  cmd: {
    content: '** 粗体 **',
    selectionRange: [3, 5],
  },
  icon: <BoldIcon width="16" />,
}, {
  name: 'I',
  title: '重点',
  cmd: {
    content: '_ 重点 _',
    selectionRange: [2, 4],
  },
  icon: <ItalicIcon width="16" />,
}, {
  name: 'Link',
  title: '链接',
  cmd: {
    content: '[链接描述](链接)',
    selectionRange: [7, 9],
  },
  icon: <LinkIcon width="16" />,
}, {
  name: 'Image',
  title: '图片',
  cmd: {
    content: '![图片描述](网址)',
    selectionRange: [8, 10],
  },
  icon: <ImageIcon width="16" />,
}]

const Toolbar = ({
  className,
  isHidden,
  onCmdBtnClick,
  onLibraryToggle,
  onPreviewToggle,
  onToolbarToggle,
  ...other,
}) => (isHidden ? null : (
  <div className={`${styles.wrapper} ${className}`} {...other}>
    <div>
      <button className={styles.toggleLibraryBtn} onClick={onLibraryToggle}>
        <LeftToggleIcon />
      </button>

      {toolbarBtns.map((btn, index) => {
        const { icon, title } = btn

        return (
          <button
            key={index}
            className={styles.toolbarBtn}
            title={title}
            onClick={() => onCmdBtnClick(btn.cmd)}
          >
            {icon}
          </button>
        )
      })}
    </div>

    <div>
      <button className={styles.toggleToolbarBtn} onClick={onToolbarToggle}>
        <TopToggleIcon />
      </button>
      <button className={styles.togglePreviewBtn} onClick={onPreviewToggle}>
        <RightToggleIcon />
      </button>
    </div>
  </div>
))

Toolbar.propTypes = propTypes

export default Toolbar
