const jwt = require('jsonwebtoken')
const { Jwt_secret } = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).json({err: 'You must be logged in'})
  }
  const token = authorization.replace("Bearer ", "")
  jwt.verify(token, Jwt_secret, (err, payload) => {
    if (err) {
      return res.status(401).json({error: 'You must be logged in'})
    }
    const { _id } = payload
      User.findById(_id).then(userData => {
        req.user = userData
      })
      next()
  })
  

}