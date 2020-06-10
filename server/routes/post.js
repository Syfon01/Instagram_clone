const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const login = require('../middleware/login')
const Post = mongoose.model("Post")

router.get('/all/post', (req, res) => {
  Post.find()
    .populate('postedBy','_id name')
    .then(post =>{
      res.json({ post })
        .catch(err => {
        console.log(err)
      })
  })
})

router.post('/create/post', login, (req, res) => {
  const { title, body } = req.body
  if (!title || !body) {
  return  res.status(422).json({error: 'Please add all fields'})
  }
  req.user.password = undefined
  const post = new Post({
    title,
    body,
    postedBy:req.user
  })
  post.save().then(result => {
    res.json({post:result})
  })
    .catch(err => {
    console.log(err)
  })
})

module.exports = router