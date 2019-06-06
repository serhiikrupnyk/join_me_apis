const TagsRepository = require('../../../repositories/TagsRepository');

async function action(req, res) {
    try {
        const tags = await TagsRepository.getAll();
        res.send({tags});
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;