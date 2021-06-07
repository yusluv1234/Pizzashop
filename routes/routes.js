const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signUpModels')

router.post('/signup', (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    // value of input
    fullName: request.body.fullName,
    userName: request.body.userName,
    email:  request.body.email,
    password: request.body.password
  })
  //save the data
  signedUpUser.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    error.json(data)
  })
})


module.exports = router