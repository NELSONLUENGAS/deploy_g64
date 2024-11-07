const { Tag } = require('../models/tag');

const tagController = {
    createTag: async (req, res, next) => {
        try {
            const { name } = req.body;
            const tag = await Tag.create({
                data: { name },
            });
            res.status(201).json(tag);
        } catch (error) {
            next(error);
        }
    },

    getAllTags: async (req, res, next) => {
        try {
            const tags = await Tag.findMany();
            res.json(tags);
        } catch (error) {
            next(error);
        }
    },

    getTagById: async (req, res, next) => {
        try {
            const tag = await Tag.findUnique({
                where: { id: parseInt(req.params.id) },
                include: { posts: true }
            });
            if (!tag) next(new Error('TAG_NOT_FOUND'));
            res.json(tag);
        } catch (error) {
            next(error);
        }
    },

    updateTag: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedTag = await Tag.update({
                where: { id: parseInt(id) },
                data: req.body,
            });
            res.json(updatedTag);
        } catch (error) {
            next(error);
        }
    },

    deleteTag: async (req, res, next) => {
        try {
            const { id } = req.params;
            await Tag.delete({ where: { id: parseInt(id) } });
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = tagController;