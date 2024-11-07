const { body, validationResult } = require('express-validator')
const { User } = require('../models/user')

const authValidators = {
    register: [
        body('username').notEmpty().withMessage('El nombre del usuario es requerido'),
        body('email').isEmail().withMessage('El formato de email es inválido')
            .custom(async (value) => {
                const existingUser = await User.findFirst({ where: { email: value } })

                if (existingUser) {
                    throw new Error('EMAIL_ALREADY_EXISTS')
                }
            }),
        body('password')
            .isLength({ min: 6 })
            .withMessage('La contraseña debe tener al menos 6 caracteres'),
        async (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const validationErrors = errors.array().map(error => ({
                    field: error.path,
                    message: error.msg,
                }));

                const validationError = new Error('VALIDATION_ERROR');
                validationError.validationErrors = validationErrors;
                next(validationError);
            }
            next();
        },
    ],
    login: [
        body('email').isEmail().withMessage('El formato de email es inválido'),
        body('password').notEmpty().withMessage('La contraseña es requerida'),
        async (req, res, next) => {
            const errors = validationResult(req)

            if (!errors.isEmpty) {
                const validationErrors = errors.array().map(error => (

                    {
                        field: error.path,
                        message: error.msg
                    }
                ))

                const validationError = new Error('VALIDATION_ERROR')

                validationError.validationErros = validationErrors
                next(validationError)
            }
            next()
        }
    ],
}

module.exports = authValidators