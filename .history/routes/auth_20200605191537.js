const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello there')
})

router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  if
})
module.exports = router