const CategoriesRepository = require('../../../repositories/CategoriesRepository');

async function action(req, res) {
    try {
        res.send(await CategoriesRepository.findById(req.params.id));
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;