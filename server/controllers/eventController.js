const eventModel = require('../models/event');
const townModel = require('../models/town');

module.exports = {
    get: {
        getAllEvents: (req, res, next) => {
            eventModel.find({}).populate('town')
                .then(events => res.send(events))
                .catch(next);
        },

        getEvent: (req, res, next) => {
            const id = req.params.id;
            eventModel.findById(id).populate('town').populate('users')
                .then(event => res.send(event))
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
    }
};