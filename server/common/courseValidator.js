const { body } = require('express-validator');

module.exports = [
    body('title', 'Title should be at least 5 symbols long!')
        .isLength({ min: 4 }),
    body('description', 'Description should be at least 20 symbols long!')
        .isLength({ min: 20 }),
    body('description', 'Description is more than 50 symbols!')
        .isLength({ max: 50 }),
    body('imageUrl')
        .custom((value) => {
            if (!value.startsWith('http') || !value.startsWith('https')) {
                throw new Error('Image url should start with http or https!');
            }
            return true;
        })
]