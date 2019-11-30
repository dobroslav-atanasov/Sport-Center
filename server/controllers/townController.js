const townModel = require('../models/town');

module.exports = {
    get: {
        getAllTowns: (req, res, next) => {
            townModel.find()
                .then(towns => {
                    const names = towns.map(x => x.name);
                    res.send(names);
                })
                .catch(next);
        }
    },

    post: {
        create: (req, res, next) => {
            const { name, country, imageUrl } = req.body;
            townModel.create({ name, country, imageUrl })
                .then((town) => res.send(town))
                .catch(next);
        }
    }
};