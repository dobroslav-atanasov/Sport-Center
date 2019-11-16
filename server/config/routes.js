const userRouter = require('../routes/userRouter');
const townRouter = require('../routes/townRouter');

module.exports = (app) => {
    app.use('/api/user', userRouter);

    app.use('/api/town', townRouter);

    app.use('*', (req, res, next) => res.send('<h1> Page Not Found </h1>'))
};