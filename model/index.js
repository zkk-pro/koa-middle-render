const mongoose = require('./dbConnect')

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  userAge: {
    type: Number,
    require: true
  }
}) 

module.exports = mongoose.model('user', userSchema, 'koadb')