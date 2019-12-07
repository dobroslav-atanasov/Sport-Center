const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/get-event/:id', eventController.get.getEvent);

router.get('/all-events', eventController.get.getAllEvents);

router.post('/create', eventController.post.create);

router.delete('/delete-event', eventController.delete.deleteEvent);

router.put('/sign-up', eventController.put.signUp);

router.put('/refuse', eventController.put.refuse);

router.get('/get-user-events/:id', eventController.get.getEventsByUserId);

module.exports = router;