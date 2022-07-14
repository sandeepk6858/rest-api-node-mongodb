const express = require('express')
const router = express.Router();
const Post = require('../models/Posts')

router.post('/',async (req,res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    post.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
})

router.get('/specific',async (req,res) => {
    res.send('I am a specific post')
})

module.exports = router;