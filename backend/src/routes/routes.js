const express = require('express')
const router = express.Router()

const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes')
const tagRoutes = require('./tagRoutes')
const logMiddleware = require('../middlewares/logsMiddleware')

router.use(logMiddleware)
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes);
router.use('/api/tags', tagRoutes);

module.exports = router