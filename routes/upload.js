// 文件上传路由

const router = require('koa-router')()

router.get('/upload', async (ctx, next) => {
  ctx.body = 123
})

module.exports = router