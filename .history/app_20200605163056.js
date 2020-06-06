const express = require('express');
const mongoose = require('mongoose')
const app = express()
const {MongoUri} = require('./keys')
const port = 5000


mongoose.connect

app.get('/', (rep, res) => {
  res.send('Hello Instagram app')
})

app.listen(port, () => {
  console.log('App running on', port)
})
