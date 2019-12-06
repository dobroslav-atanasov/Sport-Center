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
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    town: {
        type: mongoose.Types.ObjectId,
        ref: 'Town'
    },
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    results: [{
        type: mongoose.Types.ObjectId,
        ref: 'Result'
    }],
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', eventSchema);