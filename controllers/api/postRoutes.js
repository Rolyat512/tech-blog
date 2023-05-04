const router = require('express').Router();
const {Post} = require('../../models');

router.post("/", async (req,res) => {
const newPost = await Post.create(req.body);
res.json(newPost)
});

module.exports = router;