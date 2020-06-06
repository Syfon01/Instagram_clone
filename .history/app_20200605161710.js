const express = require('express');

const app = express()

const port = 5000
// YbRDmhHdf7TUIVby

// mongodb+srv://Syfonisaac:<password>@cluster0-zp2xo.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (rep, res) => {
  res.send('Hello Instagram app')
})

app.listen(port, () => {
  console.log('App running on', port)
})
