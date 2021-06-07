const mongoosee = require('mongoose')

const signUpTemplate = new mongoosee.Schema({
  fullName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})