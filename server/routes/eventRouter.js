const router = require('express').Router();
const eventController = require('../controllers/eventController');

// router.get('/', eventController.get.getAllEvents);

router.post('/create', eventController.post.create);

module.exports = router;