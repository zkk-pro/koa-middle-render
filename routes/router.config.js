
/**
 * 路由模块化，装载所有路由
 */
const router = require('koa-router')()
const axios = require('axios')
const indexRouter = require('./index.js') // 引入模块化路由
const uploadRouter = require('./upload')

module.exports = app => {
  router.use(async (ctx, next) => {
    ctx.state.axios = axios
    ctx.state.timer = Date.now()
    next()
  })
  router.use('/', indexRouter.routes()) // 根路径下的路由
  router.use('/file', uploadRouter.routes()) // 以/file 路径开头的路由

  app.use(router.routes())
  app.use(router.allowedMethods())
}