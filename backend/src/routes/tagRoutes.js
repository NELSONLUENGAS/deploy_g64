const express = require('express');
const tagController = require('../controllers/tagController');
const tagValidators = require('../validators/tagValidators');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', tagController.getAllTags);
router.get('/:id', tagController.getTagById);
router.post('/', authMiddleware, roleMiddleware(['EDITOR', 'ADMIN']), tagValidators.createTag, tagController.createTag);
router.put('/:id', authMiddleware, roleMiddleware(['EDITOR', 'ADMIN']), tagValidators.createTag, tagController.updateTag);
router.delete('/:id', authMiddleware, roleMiddleware(['EDITOR', 'ADMIN']), tagController.deleteTag);

module.exports = router;