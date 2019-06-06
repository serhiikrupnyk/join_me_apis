const TagsRepository = require('../../../repositories/TagsRepository');
const Index = require('./index');

async function action(req, res) {
    try {
        await TagsRepository.remove(req.params.id);
        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;