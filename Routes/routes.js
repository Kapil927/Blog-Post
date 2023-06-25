const express = require('express')
const router = express.Router();

const {createPost} = require('../Controllers/postController');
const {getAllPost} = require('../Controllers/postController')  
const{likePost} = require('../Controllers/likeController');
const{unlikePost} = require('../Controllers/likeController');
const{createComment} = require('../Controllers/commentController');

router.post('/posts/create', createPost );
router.post('/comments/create', createComment);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);
router.get('/posts',getAllPost);
module.exports = router;