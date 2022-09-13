const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config')

router.get('/', auth, postCtrl.displayAllPosts);
router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);



module.exports = router;