const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    time: {
        type: Date,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Result', resultSchema);