const authentication = require('../common/authentication');
const userModel = require('../models/user');
const courseModel = require('../models/course');

function index(req, res) {
    const userId = authentication.checkForAuthentication(req, res);

    const { search } = req.query;
    let query = {};

    if (search) {
        query = { ...query, title: { $regex: search } };
    }

    if (userId === undefined) {
        courseModel.find({}).sort({ users: -1 }).limit(3).then(courses => {
            res.render('home.hbs', { courses });
            return;
        });
    } else {
        courseModel.find(query).sort({ createAt: -1 }).where('isPublic').equals('true').then(courses => {
            userModel.findById(userId).then(user => {
                res.render('home.hbs', { user, courses });
            });
        });
    }
}

module.exports = {
    index
}