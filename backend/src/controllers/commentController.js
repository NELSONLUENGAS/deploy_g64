const { Comment } = require('../models/comment');
const { Post } = require('../models/post')

const commentController = {
    createComment: async (req, res, next) => {
        try {
            const { content, postId, userId } = req.body;

            const postExists = await Post.findUnique({ where: { id: postId } });
            if (!postExists) {
                next(new Error('POST_NOT_FOUND'));
            }

            const comment = await Comment.create({
                data: { content, post: { connect: { id: postId } }, user: { connect: { id: userId } } },
            });
            res.status(201).json(comment);
        } catch (error) {
            next(error)
        }
    },

    getAllComments: async (req, res, next) => {
        try {
            const comments = await Comment.findMany();
            res.json(comments);
        } catch (error) {
            next(error)
        }
    },

    getCommentById: async (req, res, next) => {
        try {
            const comment = await Comment.findUnique({ where: { id: parseInt(req.params.id) } });
            if (!comment) next(new Error('COMMENT_NOT_FOUND'));
            res.json(comment);
        } catch (error) {
            next(error);
        }
    },

    getCommentsByPostId: async (req, res, next) => {
        try {
            const { postId } = req.params;

            const postExists = await Post.findUnique({ where: { id: parseInt(postId) } });
            if (!postExists) {
                next(new Error('POST_NOT_FOUND'));
            }

            const comments = await Comment.findMany({
                where: { postId: parseInt(postId) },
            });

            res.json(comments);
        } catch (error) {
            next(error);
        }
    },

    updateComment: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedComment = await Comment.update({
                where: { id: parseInt(id) },
                data: req.body,
            });
            res.json(updatedComment);
        } catch (error) {
            next(error);
        }
    },

    deleteComment: async (req, res, next) => {
        try {
            const { id } = req.params;
            await Comment.delete({ where: { id: parseInt(id) } });
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = commentController;