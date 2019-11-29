const eventModel = require('../models/event');
const townModel = require('../models/town');

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
            townModel.findOne({name: town}).then(t => {
                const townId = t.id;
                eventModel.create({ name, date, town: townId })
                .then((event) => res.send(event))
                .catch(next);
            });
        }
    }
};