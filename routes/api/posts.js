const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Model
const Posts = require('../../models/Posts');
const Profile = require('../../models/Profile');


// Validation
const validatePostsInput = require('../../validation/Posts');


// @route  GET api/posts/test
// @desc   Tests post route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

// @route  GET api/posts
// @desc   Get Posts
// @access Public
router.get('/', (req, res) => {
  Posts.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No posts found with that id' }));
});

// @route  GET api/posts/:id
// @desc   Get Posts by id
// @access Public
router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No post found with that id' }));
});

// @route  POST api/posts
// @desc   Create Post
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostsInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }
  
  const newPost = new Posts({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
})

// @route  DELETE api/posts/:id
// @desc   Delete Post by id
// @access Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Posts.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: 'User not authorized' });
          }

          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
})

module.exports = router;