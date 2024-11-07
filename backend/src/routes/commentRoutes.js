
const express = require('express');
const commentController = require('../controllers/commentController');
const commentValidators = require('../validators/commentValidators');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:postId', authMiddleware, commentController.getCommentsByPostId);
router.post('/', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), commentValidators.createComment, commentController.createComment);
router.put('/:id', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), commentValidators.createComment, commentController.updateComment);
router.delete('/:id', authMiddleware, roleMiddleware(['EDITOR', 'AUTHOR', 'ADMIN']), commentController.deleteComment);

module.exports = router;