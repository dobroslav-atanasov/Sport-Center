const resultModel = require('../models/result');
const eventModel = require('../models/event');
const userModel = require('../models/user');

module.exports = {
    get: {
        getResultByEventId: (req, res, next) => {
            const eventId = req.params.id;
            resultModel.find({ event: eventId })
                .populate('user')
                .populate('event')
                .then(results => {
                    res.send(results);
                })
                .catch(next);
        },

        getResultByUserId: (req, res, next) => {
            const userId = req.params.id;
            resultModel.find({ user: userId })
                .populate('user')
                .populate({
                    path: 'event',
                    populate: {
                        path: 'town',
                        model: 'Town'
                    }
                })
                .then(results => {
                    res.send(results);
                })
                .catch(next);
        }
    },

    post: {
        add: (req, res, next) => {
            const { eventId, userId, time, rank } = req.body;
            resultModel.create({ event: eventId, user: userId, time: time, rank: rank })
                .then(result => {
                    eventModel.updateOne({ _id: eventId }, { $push: { results: result._id } })
                        .then(event => {
                            userModel.updateOne({ _id: userId }, { $push: { results: result._id } })
                                .then(user => {
                                    res.send(result);
                                });
                        });
                })
                .catch(next);
        }
    }
};