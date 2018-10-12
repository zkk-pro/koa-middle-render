const rp = require('request-promise')

// 使用 request-promise 第三方请求模块
const rp_getCoin = async (ctx, next) => {
  let options = {
    uri: 'http://tmain.exx.com:9000/et/UserAction/getPlatformET',
    json: true
  }
  let locals = await rp(options)
  console.log(locals)
  await ctx.render('index', locals)
}

module.exports = {
  rp_getCoin
}