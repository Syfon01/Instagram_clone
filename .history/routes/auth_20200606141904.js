const express = require('express')
const bcrypt = require("bcrypt");
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
    .then(SavedUser => {
      if (SavedUser) {
      res.status(422).json({ error : 'User already exist with that email'})
      }
      bcrypt.hash(password, 12)
        .then(hashedPassword=> {
            const user = new User(
            { email, name, password:hashedPassword }
          )
          user.save()
            .then(user => {
              res.json({message: 'User added successfully'})       
            })
            .catch(err => {
            console.log(err)
          })
          }
        )
    })
    .catch(err => {
    console.log(err)
  })
})

router.post('/login', (reg, res) => {
  const { email, password } = req.body 
  if(!email || !password)
})
module.exports = router