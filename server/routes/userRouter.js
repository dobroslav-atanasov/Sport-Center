const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/all-users', userController.get.getAllUsers);

router.get('/get-user/:id', userController.get.getUser);

router.get('/usernames', userController.get.getUsernames);

router.get('/users-by-points', userController.get.getUsersOrderByPoints);

router.post('/register', userController.post.register);

router.post('/login', userController.post.login);

router.post('/logout', userController.post.logout);

router.delete('/delete-user', userController.delete.deleteUser);

router.put('/change-role', userController.put.changeRole);

module.exports = router;