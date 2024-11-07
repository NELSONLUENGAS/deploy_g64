const express = require('express');
const postController = require('../controllers/postController');
const postValidators = require('../validators/postValidators');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), postValidators.createPost, postController.createPost);
router.put('/:id', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), postValidators.updatePost, postController.updatePost);
router.delete('/:id', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), postController.deletePost);

module.exports = router;