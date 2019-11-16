const userRouter = require('../routes/userRouter');

module.exports = (app) => {
    app.use('/api/user', userRouter);

    // app.use('/api/origami', router.origami);

    app.use('*', (req, res, next) => res.send('<h1> Page Not Found </h1>'))
};