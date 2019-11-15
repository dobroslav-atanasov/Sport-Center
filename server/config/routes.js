const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const courseController = require('../controllers/courseController');
const courseValidator = require('../common/courseValidator');
const userValidator = require('../common/userValidator');

module.exports = (app) => {
    // Courses
    app.get('/enroll/:id', courseController.getEnroll);
    app.get('/delete/:id', courseController.getDelete);
    app.post('/edit/:id', courseValidator, courseController.postEdit);
    app.get('/edit/:id', courseController.getEdit);
    app.get('/details/:id', courseController.getDetails);
    app.get('/create', courseController.getCreateCourse);
    app.post('/create', courseValidator, courseController.postCreateCourse);

    app.get('/get', userController.get);

    // Logout User
    app.get('/logout', userController.logout);
    
    // Register User
    app.get('/register', userController.getRegister);
    app.post('/register', userValidator, userController.postRegister);

    // Login User
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);

    // Home page
    app.get('/', homeController.index);
};