const errorMessages = {
    SERVER_ERROR: {
        id: 'serverError',
        statusCode: 500,
        message: 'Internal server eroor. Please try again later.',
        description: 'An unexpected error ocurred on the server.'
    },
    USER_NOT_FOUND: {
        id: 'userNotFound',
        statusCode: 404,
        message: 'User not found',
        description: 'The user provided ID does not exitsin the database.'
    },
    INVALID_CREDENTIALS: {
        id: 'invalidCredentials',
        statusCode: 401,
        message: 'Invalid email or password',
        description: 'The provided credentials are incorrect.'
    },
    EMAIL_ALREADY_EXISTS: {
        id: 'emailAlreadyExists',
        statusCode: 409,
        message: 'Email already exists',
        description: 'The email address is already register.'
    },
    VALIDATION_ERROR: {
        id: 'validationError',
        statusCode: 400,
        message: 'Validation error. Please check your input',
        description: 'Some fields are invalid.'
    },
}

module.exports = errorMessages