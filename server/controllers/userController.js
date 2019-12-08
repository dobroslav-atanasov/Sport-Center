const userModel = require('../models/user');
const config = require('../config/config');
const jwt = require('../utils/jwt');

module.exports = {
    get: {
        getAllUsers: (req, res, next) => {
            userModel.find()
                .then((users) => {
                    const u = users.filter(u => u.role !== 'SuperAdmin');
                    res.send(u);
                })
                .catch(next)
        },

        getUsernames: (req, res, next) => {
            userModel.find()
                .then((users) => {
                    const usernames = users.map(x => x.username);
                    res.send(usernames);
                })
                .catch(next);
        },

        getUser: (req, res, next) => {
            const userId = req.params.id;
            userModel.findById(userId)
                .populate('results')
                .populate({
                    path: 'event',
                    populate: {
                        path: 'town',
                        model: 'Town'
                    }
                })
                .then(user => {
                    res.send(user);
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

    delete: {
        deleteUser: (req, res, next) => {
            const { username } = req.body;
            userModel.findOne({ username: username })
                .then(user => {
                    userModel.deleteOne({ _id: user.id })
                        .then((removeUser) => {
                            res.send(removeUser);
                        })
                        .catch(next);
                });
        }
    },

    put: {
        changeRole: (req, res, next) => {
            const { username } = req.body;
            userModel.findOne({ username: username })
                .then(user => {
                    const newRole = user.role === 'Admin' ? 'User' : 'Admin';
                    userModel.findOneAndUpdate({ username: username }, { role: newRole })
                        .then(updateUser => {
                            res.send(updateUser);
                        })
                        .catch(next);
                });
        }
    }
};