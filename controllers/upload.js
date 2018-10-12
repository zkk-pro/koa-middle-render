const user = require('../model')

const upload =  async (ctx, next) => {
  try {
    let data = await user.findOne({user})
    ctx.body = data
  } catch (error) {
    ctx.body = { error }
  }
}

module.exports = {
  upload
}