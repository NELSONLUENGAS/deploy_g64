
const express = require('express');
const userController = require('../controllers/userController');
const userValidators = require('../validators/userValidators');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware(['EDITOR', 'ADMIN']), userController.getAllUsers);
router.get('/:id', authMiddleware, roleMiddleware(['EDITOR', 'ADMIN']), userController.getUserById);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN']), userValidators.updateUser, userController.updateUser);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), userController.deleteUser);

module.exports = router;