/**
 * 根路径下的路由
 */
const router = require('koa-router')()
const axios = require('axios')

class getDataService {
  constructor(ctx) {
    this.ctx = ctx
  }
  async getCoin() {
    try {
      let result = await axios.get('http://tmain.exx.com:9000/api/web/V1_0/getCoinMaps')
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

const index = async (ctx, _next) => {
  let getData = new getDataService(ctx)
  let data = await getData.getCoin()
  // await _next()
  // await ctx.render('index')

  await ctx.res.end('123')
}
console.log(index)

router.get('/', index)

module.exports = router