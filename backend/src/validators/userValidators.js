const { body, validationResult } = require('express-validator');

const userValidators = {
    updateUser: [
        body('username').optional().notEmpty().withMessage('El nombre de usuario no puede estar vacío.'),
        body('email').optional().isEmail().withMessage('El formato del email es inválido.'),
        async (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const validationErrors = errors.array().map(error => ({
                    field: error.param,
                    message: error.msg,
                }));

                const validationError = new Error('VALIDATION_ERROR');
                validationError.validationErrors = validationErrors;
                next(validationError);
            }
            next();
        },
    ],
};

module.exports = userValidators;