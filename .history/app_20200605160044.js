const express = require('express');

const app = express()

const port = 5000
// YbRDmhHdf7TUIVby

app.get('/', (rep, res) => {
  res.send('Hello Instagram app')
})

app.listen(port, () => {
  console.log('App running on', port)
})
