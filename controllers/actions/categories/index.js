const CategoriesRepository = require('../../../repositories/CategoriesRepository');

async function action(req, res) {
    try {
        const categories = await CategoriesRepository.getAll();
        res.send({categories});
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;