const ParticipantsRepository = require('../../../repositories/ParticipantsRepository');
const index = require('./index');

async function action(req, res) {
    try {
        await ParticipantsRepository.store({
            user: req.user.id,
            event: req.body.event
        });
        index(req, res);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;