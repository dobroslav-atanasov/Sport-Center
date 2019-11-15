const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    courses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

userSchema.methods = {
    matchPassword: function (password) {
        return password === this.password;
    }
}

module.exports = mongoose.model('User', userSchema);