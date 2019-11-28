const eventModel = require('../models/event');

module.exports = {
    // get: {
    //     getAllTowns: (req, res, next) => {
    //         townModel.find()
    //             .then(towns => res.send(towns))
    //             .catch(next);
    //     }
    // },

    post: {
        create: (req, res, next) => {
            const { name, date, town } = req.body;
            eventModel.create({ name, date })
                .then((event) => res.send(event))
                .catch(next);
        }
    }
};