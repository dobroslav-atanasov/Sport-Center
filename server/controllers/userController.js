const userModel = require('../models/user');
const config = require('../config/config');
const jwt = require('../utils/jwt');

module.exports = {
    get: {
        getAllUsers: (req, res, next) => {
            userModel.find()
                .then((users) => res.send(users))
                .catch(next)
        },

        getUsernames: (req, res, next) => {
            userModel.find()
                .then((users) => {
                    const usernames = users.map(x => x.username);
                    res.send(usernames);
                })
                .catch(next);
        }
    },

    post: {
        register: (req, res, next) => {
            const { username, password, firstName, lastName, email, age, gender } = req.body;
            userModel.create({ username, password, firstName, lastName, email, age, gender })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            userModel.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.send('Invalid username or password!');
                        return;
                    }

                    const token = jwt.createToken({ id: user._id, role: user.role, username: user.username });
                    res.cookie(config.authCookieName, token).send(token);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            res.clearCookie(config.authCookieName).send('Logout successfully!');
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        userModel.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        userModel.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};