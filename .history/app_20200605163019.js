const express = require('express');
const mongoose = require('mongoose')
const app = express()
const {MongoUri} = require(./)
const port = 5000


app.get('/', (rep, res) => {
  res.send('Hello Instagram app')
})

app.listen(port, () => {
  console.log('App running on', port)
})
