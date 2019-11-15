const { body } = require('express-validator');

module.exports = [
    body('username', 'Username should be at least 5 symbols!')
        .isLength({ min: 5 }),
    body('username', 'Username should contain only letters and digits!')
        .isAlphanumeric(),
    body('password', 'Password should be at least 5 symbols!')
        .isLength({ min: 5 }),
    body('password', 'Password should contain only letters and digits!')
        .isAlphanumeric()
]