const router = require('express').Router();
const townController = require('../controllers/townController');

router.get('/', townController.get.getAllTowns);

router.post('/create', townController.post.create);

module.exports = router;