const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3333,
        connectionString: 'mongodb://localhost:27017/sport-data-center',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];