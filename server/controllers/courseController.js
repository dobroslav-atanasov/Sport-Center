const authentication = require('../common/authentication');
const userModel = require('../models/user');
const courseModel = require('../models/course');
const { validationResult } = require('express-validator');

function getCreateCourse(req, res) {
    const userId = authentication.checkForAuthentication(req, res);
    userModel.findById(userId).then(user => {
        res.render('create.hbs', { user });
    });
}

function postCreateCourse(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;
    const userId = authentication.checkForAuthentication(req, res);

    courseModel.findOne({ title: title }).then(courseInDb => {
        if (courseInDb !== null) {
            res.render('create.hbs', {
                message: `${courseInDb.title} course  already exist!`,
                oldBody: req.body
            });
            return;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('create.hbs', {
                message: errors.array()[0].msg,
                oldBody: req.body
            });
        }

        courseModel.create({ title, description, imageUrl, creatorId: userId, createAt: Date.now(), isPublic: isPublic !== undefined ? true : false }).then(course => {
            res.redirect('/');
        });
    });
}

function getDetails(req, res) {
    const courseId = req.params.id;
    const userId = authentication.checkForAuthentication(req, res);

    Promise.all([
        userModel.findById(userId),
        courseModel.findById(courseId)
    ]).then(([user, course]) => {
        const isCreator = userId === course.creatorId;
        const isEnroll = course.users.includes(userId);
        res.render('details.hbs', { user, course, isCreator, isEnroll });
    });
}

function getEdit(req, res) {
    const courseId = req.params.id;
    const userId = authentication.checkForAuthentication(req, res);

    Promise.all([
        userModel.findById(userId),
        courseModel.findById(courseId)
    ]).then(([user, course]) => {
        res.render('edit.hbs', { user, course });
    });
}

function postEdit(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;
    const courseId = req.params.id;
    const userId = authentication.checkForAuthentication(req, res);

    userModel.findById(userId).then(user => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('edit.hbs', {
                message: errors.array()[0].msg,
                oldBody: req.body,
                currentCourseId: courseId,
                user: user
            });
        }

        courseModel.findByIdAndUpdate(courseId, { title, description, imageUrl, isPublic: isPublic !== undefined ? true : false }).then(course => {
            res.redirect(`/details/${courseId}`);
        });
    });
}

function getDelete(req, res) {
    const courseId = req.params.id;

    courseModel.findById(courseId).remove().then(() => {
        res.redirect(`/`);
    });
}

function getEnroll(req, res) {
    const courseId = req.params.id;
    const userId = authentication.checkForAuthentication(req, res);

    Promise.all([
        courseModel.updateOne({ _id: courseId }, { $push: { users: userId } }),
        userModel.updateOne({ _id: userId }, { $push: { courses: courseId } })
    ]).then(() => {
        res.redirect('/');
    });
}

module.exports = {
    getCreateCourse,
    postCreateCourse,
    getDetails,
    getEdit,
    postEdit,
    getDelete,
    getEnroll
}