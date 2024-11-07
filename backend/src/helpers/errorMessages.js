const errorMessages = {
    USER_NOT_FOUND: {
        id: 'userNotFound',
        statusCode: 404,
        message: 'User not found.',
        description: 'The user with the provided ID does not exist in the database.',
    },
    INVALID_CREDENTIALS: {
        id: 'invalidCredentials',
        statusCode: 401,
        message: 'Invalid email or password.',
        description: 'The provided credentials are incorrect. Please check your email and password.',
    },
    POST_NOT_FOUND: {
        id: 'postNotFound',
        statusCode: 404,
        message: 'Post not found.',
        description: 'The post with the provided ID does not exist.',
    },
    COMMENT_NOT_FOUND: {
        id: 'commentNotFound',
        statusCode: 404,
        message: 'Comment not found.',
        description: 'The comment you are looking for does not exist.',
    },
    UNAUTHORIZED: {
        id: 'unauthorized',
        statusCode: 403,
        message: 'You are not authorized to perform this action.',
        description: 'You do not have the necessary permissions to access this resource.',
    },
    VALIDATION_ERROR: {
        id: 'validationError',
        statusCode: 400,
        message: 'Validation error. Please check your input.',
        description: 'Some fields are invalid or missing. Please ensure all required fields are filled out correctly.',
    },
    SERVER_ERROR: {
        id: 'serverError',
        statusCode: 500,
        message: 'Internal server error. Please try again later.',
        description: 'An unexpected error occurred on the server. Please contact support if the issue persists.',
    },
    POST_CREATION_FAILED: {
        id: 'postCreationFailed',
        statusCode: 500,
        message: 'Failed to create post.',
        description: 'An error occurred while trying to create the post. Please try again.',
    },
    COMMENT_CREATION_FAILED: {
        id: 'commentCreationFailed',
        statusCode: 500,
        message: 'Failed to create comment.',
        description: 'An error occurred while trying to create the comment. Please try again.',
    },
    POST_UPDATE_FAILED: {
        id: 'postUpdateFailed',
        statusCode: 500,
        message: 'Failed to update post.',
        description: 'An error occurred while trying to update the post. Please try again.',
    },
    COMMENT_UPDATE_FAILED: {
        id: 'commentUpdateFailed',
        statusCode: 500,
        message: 'Failed to update comment.',
        description: 'An error occurred while trying to update the comment. Please try again.',
    },
    POST_DELETION_FAILED: {
        id: 'postDeletionFailed',
        statusCode: 500,
        message: 'Failed to delete post.',
        description: 'An error occurred while trying to delete the post. Please try again.',
    },
    COMMENT_DELETION_FAILED: {
        id: 'commentDeletionFailed',
        statusCode: 500,
        message: 'Failed to delete comment.',
        description: 'An error occurred while trying to delete the comment. Please try again.',
    },
    TAG_NOT_FOUND: {
        id: 'tagNotFound',
        statusCode: 404,
        message: 'Tag not found.',
        description: 'The tag you are looking for does not exist.',
    },
    TAG_CREATION_FAILED: {
        id: 'tagCreationFailed',
        statusCode: 500,
        message: 'Failed to create tag.',
        description: 'An error occurred while trying to create the tag. Please try again.',
    },
    TAG_UPDATE_FAILED: {
        id: 'tagUpdateFailed',
        statusCode: 500,
        message: 'Failed to update tag.',
        description: 'An error occurred while trying to update the tag. Please try again.',
    },
    TAG_DELETION_FAILED: {
        id: 'tagDeletionFailed',
        statusCode: 500,
        message: 'Failed to delete tag.',
        description: 'An error occurred while trying to delete the tag. Please try again.',
    },
    FORBIDDEN_ACTION: {
        id: 'forbiddenAction',
        statusCode: 403,
        message: 'Action forbidden.',
        description: 'You are not allowed to perform this action on the resource.',
    },
    EMAIL_ALREADY_EXISTS: {
        id: 'emailAlreadyExists',
        statusCode: 409,
        message: 'Email already exists.',
        description: 'The email address is already registered. Please use a different email.',
    },
    USERNAME_ALREADY_EXISTS: {
        id: 'usernameAlreadyExists',
        statusCode: 409,
        message: 'Username already exists.',
        description: 'The username is already taken. Please choose another one.',
    },
    PASSWORD_TOO_WEAK: {
        id: 'passwordTooWeak',
        statusCode: 400,
        message: 'Password is too weak.',
        description: 'Your password must contain at least 6 characters, including uppercase letters, lowercase letters, and numbers.',
    },
    ACCOUNT_LOCKED: {
        id: 'accountLocked',
        statusCode: 423,
        message: 'Account is locked.',
        description: 'Your account has been temporarily locked due to multiple failed login attempts. Please try again later.',
    },
    TOKEN_EXPIRED: {
        id: 'tokenExpired',
        statusCode: 401,
        message: 'Token has expired.',
        description: 'The authentication token is no longer valid. Please log in again.',
    },
    TOKEN_INVALID: {
        id: 'tokenInvalid',
        statusCode: 401,
        message: 'Invalid token.',
        description: 'The provided token is invalid. Please check and try again.',
    },
    UNEXPECTED_ERROR: {
        id: 'unexpectedError',
        statusCode: 500,
        message: 'Unexpected error occurred.',
        description: 'An unexpected error occurred. Please contact support if the issue persists.',
    }
};

module.exports = errorMessages;