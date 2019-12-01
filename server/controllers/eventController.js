const eventModel = require('../models/event');
const townModel = require('../models/town');

module.exports = {
    get: {
        getAllEvents: (req, res, next) => {
            eventModel.find({}).populate('town')
                .then(events => res.send(events))
                .catch(next);
        }
    },

    post: {
        create: (req, res, next) => {
            const { name, date, description, town } = req.body;
            townModel.findOne({ name: town }).then(t => {
                const townId = t.id;
                eventModel.create({ name, date, description, town: townId })
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