const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')


router.get('/', (req, res) => {
  res.send('Hello there')
})

router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(422).json({ error : 'Please enter all field'})
  }

  User.findOne({ email: email })
    .then((SavedUser) => {
      if (SavedUser) {
      res.status(422).json({ error : 'User already exist with that email'})
    }
  })
  res.json({message: 'Added successfully'})
})
module.exports = router