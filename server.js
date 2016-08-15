const koa = require('koa')
const staticCache = require('koa-static-cache')
const render = require('co-ejs')

const app = koa()

app.use(staticCache(`${__dirname}/public`))

app.use(render(app, {
  root: `${__dirname}/public`,
  layout: false,
}))

app.use(function* renderIndex() {
  yield this.render('index')
})

app.listen(8080, () => console.log('Server running at port 8080'))
