const express = require('express')
const authController = require('../controllers/auth.controller')
const authValidators = require('../validators/auth.validator')
const router = express.Router()

router.post('/register', authValidators.register, authController.register)
router.post('/login', authValidators.login, authController.login)


module.exports = router