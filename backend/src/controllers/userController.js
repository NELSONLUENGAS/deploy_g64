
const { User } = require('../models/user');

const userController = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.findMany();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const user = await User.findUnique({
                where: { id: parseInt(req.params.id) },
                include: {
                    posts: {
                        include: {
                            comments: {
                                where: {
                                    userId: parseInt(req.params.id)
                                },
                            },
                        },
                    },
                },
            });

            if (!user) next(new Error('USER_NOT_FOUND'));
            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedUser = await User.update({
                where: { id: parseInt(id) },
                data: req.body,
            });
            res.json(updatedUser);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            await User.delete({ where: { id: parseInt(id) } });
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = userController;