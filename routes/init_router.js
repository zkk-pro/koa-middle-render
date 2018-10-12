
/**
 * 路由模块化，装载所有路由
 */
const router = require('koa-router')()
const indexRouter = require('./home.js') // 引入模块化路由
const uploadRouter = require('./upload.js')

module.exports = app => {
  // 全局变量
  router.use(async (ctx, next) => {
    ctx.state.timer = Date.now()
    await next()
  })
  router.use('/', indexRouter.routes()) // 根路径下的路由
  router.use('/file', uploadRouter.routes()) // 以/file 路径开头的路由

  app.use(router.routes())
  app.use(router.allowedMethods())
}