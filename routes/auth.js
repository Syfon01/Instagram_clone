const express = require('express')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')

const { Jwt_secret } = require('../keys')
const login = require('../middleware/login')

router.get('/protected', login, (req, res) => {
  res.send('This is protected')
})
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

router.post('/login', (req, res) => {
  const { email, password } = req.body 
  if (!email || !password) {
    res.status(422).json({error: 'Please enter email and password'})
  }
  User.findOne({ email: email })
    .then(SavedUser => {
      if (!SavedUser) {
      res.status(422).json({ error: "Invalid email or password" });
      }
      bcrypt.compare(password, SavedUser.password)
        .then(doMatch => {
          if (doMatch) {
            const token = jwt.sign({ _id: SavedUser._id }, Jwt_secret)
            res.json({token})
          // res.json({message: 'Login successfully'})
          }
          else {
          res.status(422).json({ error: "Invalid email or password" });
          }
        })
        .catch(err => {
        console.log(err)
      })
  })
})
module.exports = router