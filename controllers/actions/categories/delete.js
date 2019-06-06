const CategoriesRepository = require('../../../repositories/CategoriesRepository');
const Index = require('./index');

async function action(req, res) {
    try {
        await CategoriesRepository.remove(req.params.id);
        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;