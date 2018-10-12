// 数据库连接

const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.connect(config.mongodb.url, {useNewUrlParser: true}, err => {
  if (err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库连接成功')
  }
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success.')
})

mongoose.connection.on('error', () => {
  console.log('MongoDB connected eroor.')
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connected disconnected.')
})

module.exports = mongoose