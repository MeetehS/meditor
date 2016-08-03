# meditor
a markdown editor, use react, redux

markdown parser is [marked](https://github.com/chjj/marked)

markdown style is [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

[Demo](https://zhiquan-yu.github.io/meditor/)
[![Demo](http://ww2.sinaimg.cn/large/72f96cbagw1f6dcof9z9mj21400p0aly.jpg)](https://zhiquan-yu.github.io/meditor/)

## Environment of develop
macOS 10.12 beta
Node v6.3.0
npm v3.10.3

## Design
1. Evertime when user go to the editor, it should be in the new article state, if user input, add a
new article automatically, rather than open an old article, because this is a editor, user just want
to write a new article, save to localStorage is just a functionality to save user's job when some
accident happen, such as close the tab or browser crashed.

## Q&A
### What is autosave? And how do you realized?
1. Please read [Auto Save（自动保存）案例和情景分析](http://www.woshipm.com/pd/242913.html)。
2. autosave after edit.

### Why don't add code button to toolbar?
ToolBar is for those don't know Markdown, not developers.

## TODO
- [x] markdown parser
- [x] live preview
- [x] sync scrolling: by percentage.

[左右区域的同步滚动在Markdown中有多张图片时严重错位](https://github.com/pandao/editor.md/issues/56)，the following two todos is my solution:

- [ ] sync scrolling: by heading
- [ ] sync scrolling: by content
- [x] article list
- [x] live articles search


- [x] autosave after edit(localStorage)
- [ ] save cursor's position


- [x] toolbar
- [x] library toggle
- [x] preview toggle
- [x] toolbar toggle
- [ ] normal mode(show all)
- [ ] edit mode(hide library, hide preview, hide toolbar)
- [ ] preview mode(hide library, hide toolbar)
- [ ] read mode(hide library, hide editor, hide toolbar)


- [ ] add LaunchScreen

## Develop
1. Use the immutable only in reducers.
2. user name + Action to name action, such as getArticlesAction, to difference between actions and
common functions.

## CHANGELOG
### v0.0.1
- add new article button
- add article list
- add markdown parser
- add live preview
- add autosave after edit

### v0.0.2
- add sync scrolling

### v0.0.3
- add toolbar

### v0.0.4
- add library toggle
- add preview toggle
- add toolbar toggle: use toolbar toggle button or use key `esc`

### v0.0.5
- add live articles search: just bring searched articles to front, the unsearched articles still in the end of library

### v0.0.6
- a new red ui
- replace all pngs to svgs
