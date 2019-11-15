const userModel = require('../models/user');
const jwt = require('../common/jwt');
const authentication = require('../common/authentication');
const { validationResult } = require('express-validator');

function getRegister(req, res) {
    const userId = authentication.checkForAuthentication(req, res);
    userModel.findById(userId).then(user => {
        res.render('register.hbs', { user });
    });
}

function postRegister(req, res) {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        res.render('register.hbs', {
            message: 'Your password and confirmation password do not match.',
            oldBody: req.body
        });
        return;
    }

    userModel.findOne({ username: username }).then(userInDb => {
        if (userInDb !== null) {
            res.render('register.hbs', {
                message: `${userInDb.username} username  already exist!`,
                oldBody: req.body
            });
            return;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register.hbs', {
                message: errors.array()[0].msg,
                oldBody: req.body
            });
        }

        userModel.create({ username, password }).then(user => {
            res.redirect('/login');
        });
    });
}

function getLogin(req, res) {
    const userId = authentication.checkForAuthentication(req, res);
    userModel.findById(userId).then(user => {
        res.render('login.hbs', { user });
    });
}

function postLogin(req, res) {
    const { username, password } = req.body;
    userModel.findOne({ username }).then(user => {
        if (user === null) {
            res.render('login.hbs', {
                message: 'Invalid username or password!'
            });
            return;
        } else {
            const isMatch = user.matchPassword(password);
            if (!isMatch) {
                res.render('login.hbs', {
                    message: 'Invalid username or password!'
                });
                return;
            }

            const jwtToken = jwt.create({ id: user.id });
            res.cookie('auth-token', jwtToken);
            res.redirect('/');
        }
    });
}

function logout(req, res) {
    res.clearCookie('auth-token');
    res.redirect('/');
}

function get(req, res) {
    userModel.find({}).then(user => {
        res.status(200).json({ user });
    });
}

module.exports = {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    logout,
    get
}