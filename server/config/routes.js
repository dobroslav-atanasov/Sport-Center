const userRouter = require('../routes/userRouter');
const townRouter = require('../routes/townRouter');
const eventRouter = require('../routes/eventRouter');

module.exports = (app) => {
    app.use('/api/user', userRouter);

    app.use('/api/town', townRouter);

    app.use('/api/event', eventRouter);

    app.use('*', (req, res, next) => res.send('<h1> Page Not Found </h1>'))
};