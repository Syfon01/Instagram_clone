const express = require('express');
const mongoose = require('mongoose')
const app = express()
const { MongoUri } = require('./keys')
const bcrypt = require('b')
const port = 5000
require('./model/users')




app.use(express.json())

app.use(require('./routes/auth'))


mongoose.connect(MongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

mongoose.connection.on('connected',() => {
  console.log('connected to mogngodb')
})

mongoose.connection.on("err", (err) => {
  console.log("error connecting to mogngodb", err);
});


// app.get('/', (rep, res) => { 
//   res.send('Hello Instagram app')
// })

app.listen(port, () => {
  console.log('App running on', port)
})
