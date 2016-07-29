# meditor
a markdown editor, use react, redux

markdown parser is [marked](https://github.com/chjj/marked)

markdown style is [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## run
```
npm start
```

## Q&A
### What is autosave? And how do you realized?
1. Please read [Auto Save（自动保存）案例和情景分析](http://www.woshipm.com/pd/242913.html)。
2. autosave after edit.

### Why don't add code button to toolbar?
ToolBar is for those don't know Markdown, not developers.

## TODO
- [x] markdown parser
- [x] live preview
- [x] sync scrolling
- [x] article list
- [x] live articles search
- [x] autosave after edit
- [x] toolbar
- [x] library toggle
- [x] preview toggle
- [x] toolbar toggle

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
