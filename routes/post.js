const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

router.post('/create/post', (req, res) => {
  const { title, post } = req.body
  if (!title || !post) {
    res.status(422).json({error: 'Please add all fields'})
  }
})

module.exports = router