const townModel = require('../models/town');

module.exports = {
    get: {
        getAllTowns: (req, res, next) => {
            townModel.find()
                .then(towns => res.send(towns))
                .catch(next);
        }
    },

    post: {
        create: (req, res, next) => {
            const { name, country } = req.body;
            townModel.create({ name, country })
                .then((town) => res.send(town))
                .catch(next);
        }
    }
};