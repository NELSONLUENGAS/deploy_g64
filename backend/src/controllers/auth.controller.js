require('dotenv')
const { handleHashPassword, handleComparePassword } = require("../helpers/bcrypt")
const { User } = require("../models/user")
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

const authController = {
    register: async (req, res, next) => {
        try {
            const { username, email, password } = req.body
            const hashedPassword = await handleHashPassword(password)

            const user = await User.create({
                data: {
                    username,
                    email,
                    password: hashedPassword
                }
            })

            res.status(201).json({ user })
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body
            const user = await User.findUnique({ where: email })

            if (!user) {
                next(new Error('USER_NOT_FOUND'))
            }

            const match = await handleComparePassword(password, user.password)

            if (!match) {
                next(new Error('INVALID_CREDENTIALS'))
            }

            const token = jwt.sign(
                { id: user.id, },
                String(JWT_SECRET),
                { expiresIn: '1day' }
            )

            res.status(201).json({ token })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController