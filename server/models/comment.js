const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    event: {
        type: ObjectId,
        ref: 'Event'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);