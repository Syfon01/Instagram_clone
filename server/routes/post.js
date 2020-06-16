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
  const { title, body, pic } = req.body
  if (!title || !body || !pic) {
  return  res.status(422).json({error: 'Please add all fields'})
  }
  req.user.password = undefined
  const post = new Post({
    title,
    body,
    pic,
    postedBy:req.user
  })
  post.save().then(result => {
    res.json({post:result})
  })
    .catch(err => {
    console.log(err)
  })
})

router.get('/mypost', login,(req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", '_id name')
    .then(mypost => {
      res.json({ mypost })
        .catch(err => {
        console.log(err)
      })
  })
})

module.exports = router