const eventModel = require('../models/event');
const townModel = require('../models/town');
const userModel = require('../models/user');

module.exports = {
    get: {
        getAllEvents: (req, res, next) => {
            eventModel.find({})
                .populate('town')
                .then(events => res.send(events))
                .catch(next);
        },

        getEvent: (req, res, next) => {
            const id = req.params.id;
            eventModel.findById(id)
                .populate('town')
                .populate('users')
                .then(event => res.send(event))
                .catch(next);
        },

        getEventsByUserId: (req, res, next) => {
            const userId = req.params.id;
            eventModel.find({})
                .where('users')
                .equals(userId)
                .populate('town')
                .populate('users')
                .populate('results')
                .then(events => res.send(events))
                .catch(next);
        }
    },

    post: {
        create: (req, res, next) => {
            const { name, location, date, description, town, creatorId } = req.body;
            townModel.findOne({ name: town })
                .then(t => {
                    const townId = t.id;
                    eventModel.create({ name, location, date, description, town: townId, creatorId })
                        .then((event) => res.send(event))
                        .catch(next);
                });
        }
    },

    delete: {
        deleteEvent: (req, res, next) => {
            const { id } = req.body;
            eventModel.findByIdAndDelete({ _id: id })
                .then(removeEvent => res.send(removeEvent))
                .catch(next);
        }
    },

    put: {
        signUp: (req, res, next) => {
            const { eventId, userId } = req.body;
            eventModel.updateOne({ _id: eventId }, { $push: { users: userId } })
                .then(data => {
                    userModel.updateOne({ _id: userId }, { $push: { events: eventId } })
                        .then(() => res.send(data));
                })
                .catch(next);
        },

        refuse: (req, res, next) => {
            const { eventId, userId } = req.body;
            eventModel.updateOne({ _id: eventId }, { $pull: { users: userId } })
                .then(data => res.send(data))
                .catch(next);
        }
    }
};