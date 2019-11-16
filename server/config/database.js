const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
};