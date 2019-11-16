const mongoose = require('mongoose');

const townSchema = new mongoose.Schema({
    name: {
        type: String
    },
    country: {
        type: String
    }
});

module.exports = mongoose.model('Town', townSchema);