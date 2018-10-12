const config = {
  port: process.env.PORT || 3000,
  mongodb: {
    url: 'mongodb://localhost:27017/koadb'
  }
}
module.exports = config