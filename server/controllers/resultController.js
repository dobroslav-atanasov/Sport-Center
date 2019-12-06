const resultModel = require('../models/result');
const eventModel = require('../models/event');
const userModel = require('../models/user');

module.exports = {
    post: {
        add: (req, res, next) => {
            const { eventId, userId, time } = req.body;
            resultModel.create({ event: eventId, user: userId, time: time })
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