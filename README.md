# meditor
a pure editor

[Demo](https://zhiquan-yu.github.io/meditor/)
[![Demo](http://ww2.sinaimg.cn/large/72f96cbagw1f6dcof9z9mj21400p0aly.jpg)](https://zhiquan-yu.github.io/meditor/)

## Q&A
### What is autosave? And how do you realized?
1. Please read [Auto Save（自动保存）案例和情景分析](http://www.woshipm.com/pd/242913.html)。
2. autosave after edit.

### Why don't add code button to toolbar?
ToolBar is for those don't know Markdown, not developers.

## Design
1. Evertime when user go to the editor, it should be in the new article state, if user input, add a
new article automatically, rather than open an old article, because this is a editor, user just want
to write a new article, save to localStorage is just a functionality to save user's job when some
accident happen, such as close the tab or browser crashed.

## Develop
1. Use the immutable only in reducers.
2. user name + Action to name action, such as getArticlesAction, to difference between actions and
common functions.

## Environment of develop
- macOS 10.12 beta
- Node v6.3.0
- npm v3.10.3
