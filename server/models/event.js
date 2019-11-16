const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    town: {
        type: ObjectId,
        ref: 'Town'
    },
    result: {
        type: ObjectId,
        ref: 'Result'
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Event', eventSchema);