const router = require('express').Router();
const resultController = require('../controllers/resultController');

router.post('/add', resultController.post.add);

router.get('/get-results/:id', resultController.get.getResultByEventId);

router.get('/get-my-results/:id', resultController.get.getResultByUserId);

module.exports = router;