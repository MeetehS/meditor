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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server running at port ', PORT))
