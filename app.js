
const Koa = require('koa')
const router = require('./routes/router.config.js')
const render = require('koa-art-template')
const static = require('koa-static')
const path = require('path')
const http = require('http')

const app = new Koa()
// 路由
router(app)
// 模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})
// 静态资源
app.use(static(path.join(__dirname, 'public')))
app.context.$http = http
// 404页面
app.use(async ctx => {
  ctx.body = '404'
})

app.listen(3000, () => {
  console.log('app runing at port 3000')
})