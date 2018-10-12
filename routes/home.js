/**
 * 根路径下的路由
 */
const router = require('koa-router')()
const { rp_getCoin } = require('../controllers/home')


const indexHandle = async (ctx) => {
  let getData = new getDataService(ctx)
  let data = await getData.rp_getCoin()
  ctx.render('index', {data})
}

router.get('/',rp_getCoin)

module.exports = router