const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    event: {
        type: ObjectId,
        ref: 'Event'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    time: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Result', resultSchema);