class getDataService {
  constructor(ctx) {
    this.ctx = ctx
  }
  // 使用原生的 http 模块
  // getCoin () {
  //   return new Promise((resolve, reject) => {
  //     var opt = {
  //       host: 'tmain.exx.com',
  //       port: '9000',
  //       path: '/api/web/V1_0/getCoinMaps',
  //       method: 'get'
  //     }
  //     var data = ''
  //     var req = http.request(opt, function (res) {
  //       res.setEncoding('utf-8')
  //       res.on('data', function(chunk) {
  //         data += chunk
  //       })
  //       res.on('end', () => {
  //         data = JSON.parse(data)
  //         resolve(data.datas.ssa)
  //       })
  //     })
  //     req.write('')
  //     req.end()
  //   })
  // }

  // 使用 request-promise 第三方请求模块
  async rp_getCoin() {
    let options = {
      uri: 'http://tmain.exx.com:9000/et/UserAction/getPlatformET',
      json: true
    }
    let result = await rp(options)
    return result
  }
}
const indexHandle = async (ctx) => {
  let getData = new getDataService(ctx)
  let data = await getData.rp_getCoin()
  ctx.render('index', {data})
}
module.exports = getDataService