const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { handleHashPassword, handleComparePassword } = require('../helpers/bcrypt');

const authController = {
    register: async (req, res, next) => {
        try {
            const { email, password, role } = req.body;

            const hashedPassword = await handleHashPassword(password);

            const user = await User.create({
                data: { email, password: hashedPassword, role },
            });

            res.status(201).json({ user });
        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await User.findUnique({ where: { email } });

            if (!user) {
                next(new Error('USER_NOT_FOUND'));
            }

            const match = await handleComparePassword(password, user.password);

            if (!match) {
                next(new Error('INVALID_CREDENTIALS'));
            }

            const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = authController;