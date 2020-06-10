const express = require('express');
const mongoose = require('mongoose')
const app = express()
const { MongoUri } = require('./keys')
const port = 5000

mongoose.connect(MongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

mongoose.connection.on('connected',() => {
  console.log('connected to mongodb')
})

mongoose.connection.on("err", (err) => {
  console.log("error connecting to mongodb", err);
});

require('./model/users')
require('./model/post')


app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))


// app.get('/', (rep, res) => { 
//   res.send('Hello Instagram app')
// })

app.listen(port, () => {
  console.log('App running on', port)
})
