const { body, validationResult } = require('express-validator');

const tagValidators = {
    createTag: [
        body('name').notEmpty().withMessage('El nombre de la etiqueta es requerido.'),
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

module.exports = tagValidators;