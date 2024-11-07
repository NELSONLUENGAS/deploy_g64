
const errorMessages = require('../helpers/errorMessages');

const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    const validationErrors = err.validationErrors || [];
    const errorDetails = errorMessages[err.message] || errorMessages.SERVER_ERROR;

    const response = {
        id: errorDetails.id,
        message: errorDetails.message,
        description: errorDetails.description,
    };

    if (validationErrors.length) {
        response.validationErrors = validationErrors;
    }

    res.status(errorDetails.statusCode).json(response);
};

module.exports = errorMiddleware;