module.exports = {
    development: {
        port: process.env.PORT || 3333,
        connectionString: 'mongodb://localhost:27017/sport-data-center'
    },
    production: {}
};