const config = require('./config/config');
const dbConnection = require('./config/database');
const seedSuperAdmin = require('./common/seedSuperAdmin');
const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    seedSuperAdmin.addSuperAdmin();
    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);