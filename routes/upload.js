// 文件上传路由

const router = require('koa-router')()
const { upload } = require('../controllers/upload')

router.get('/upload', upload)

module.exports = router