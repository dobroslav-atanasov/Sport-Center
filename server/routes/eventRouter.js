const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/all-events', eventController.get.getAllEvents);

router.get('/get-my-events', eventController.get.getAllEvents);

router.post('/create', eventController.post.create);

router.delete('/delete-event', eventController.delete.deleteEvent);

module.exports = router;