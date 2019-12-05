const userRouter = require('../routes/userRouter');
const townRouter = require('../routes/townRouter');
const eventRouter = require('../routes/eventRouter');
const resultRouter = require('../routes/resultRouter');

module.exports = (app) => {
    app.use('/api/user', userRouter);

    app.use('/api/town', townRouter);

    app.use('/api/event', eventRouter);

    app.use('/api/result', resultRouter);

    app.use('*', (req, res, next) => res.send('<h1> Page Not Found </h1>'))
};