const resultModel = require('../models/result');

module.exports = {
    // get: {
    //     getAllEvents: (req, res, next) => {
    //         eventModel.find({}).populate('town')
    //             .then(events => res.send(events))
    //             .catch(next);
    //     },

    //     getEvent: (req, res, next) => {
    //         const id = req.params.id;
    //         eventModel.findById(id).populate('town').populate('users')
    //             .then(event => res.send(event))
    //             .catch(next);
    //     }
    // },

    post: {
        add: (req, res, next) => {
            const { userId, evenId, date } = req.body;
            // townModel.findOne({ name: town })
            //     .then(t => {
            //         const townId = t.id;
            //         eventModel.create({ name, location, date, description, town: townId, creatorId })
            //             .then((event) => res.send(event))
            //             .catch(next);
            //     });
        }
    }
};