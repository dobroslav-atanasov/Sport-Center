const router = require('express').Router();
const resultController = require('../controllers/resultController');

router.post('/add', resultController.post.add);

module.exports = router;