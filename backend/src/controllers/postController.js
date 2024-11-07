const { Post } = require('../models/post');

const postController = {
    createPost: async (req, res, next) => {
        try {
            const { title, content, userId } = req.body;
            const post = await Post.create({
                data: { title, content, author: { connect: { id: userId } } },
            });
            res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    },

    getAllPosts: async (req, res, next) => {
        try {
            const posts = await Post.findMany();
            res.json(posts);
        } catch (error) {
            next(error);
        }
    },

    getPostById: async (req, res, next) => {
        try {
            const post = await Post.findUnique({
                where: {
                    id: parseInt(req.params.id)
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    comments: {
                        select: {
                            id: true,
                            content: true,
                            user: {
                                select: {
                                    id: true,
                                    email: true,
                                    role: true,
                                }
                            },
                        },
                    },
                    tags: true,
                }
            });

            if (!post) return next(new Error('POST_NOT_FOUND'));
            res.json(post);
        } catch (error) {
            next(error);
        }
    },

    updatePost: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedPost = await Post.update({
                where: { id: parseInt(id) },
                data: req.body,
            });
            res.json(updatedPost);
        } catch (error) {
            next(error);
        }
    },

    deletePost: async (req, res, next) => {
        try {
            const { id } = req.params;
            await Post.delete({ where: { id: parseInt(id) } });
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = postController;