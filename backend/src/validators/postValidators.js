const { body, validationResult } = require('express-validator');

const postValidators = {
    createPost: [
        body('title').notEmpty().withMessage('El título es requerido.'),
        body('content').notEmpty().withMessage('El contenido es requerido.'),
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

    updatePost: [
        body('title').optional().notEmpty().withMessage('El título no puede estar vacío.'),
        body('content').optional().notEmpty().withMessage('El contenido no puede estar vacío.'),
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

module.exports = postValidators;