const ParticipantsRepository = require('../../../repositories/ParticipantsRepository');
const index = require('./index');

async function action(req, res) {
    try {
        await ParticipantsRepository.remove(req.params.id);
        index(req, res);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;