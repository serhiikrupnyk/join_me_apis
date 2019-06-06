const CategoriesRepository = require('../../../repositories/CategoriesRepository');
const Index = require('./index');

async function action(req, res) {
    try {
        console.log(req.body);
        await CategoriesRepository.store({
            name: req.body.name,
            tags: req.body.tags
        });

        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;