const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const user

router.get('/', (req, res) => {
  res.send('Hello there')
})

router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(422).json({ error : 'Please enter all field'})
  }
  res.json({message: 'Added successfully'})
})
module.exports = router