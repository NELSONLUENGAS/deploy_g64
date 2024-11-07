require('dotenv')
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            throw new Error('UNAUTHORIZED');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findUnique({ where: { id: decoded.id } });
        if (!req.user) {
            throw new Error('USER_NOT_FOUND');
        }
        next();
    } catch (err) {
        next(err)
    }
};

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            throw new Error('UNAUTHORIZED');
        }

        if (!roles.includes(req.user.role)) {
            throw new Error('FORBIDDEN_ACTION');
        }

        next();
    };
};

module.exports = { authMiddleware, roleMiddleware };