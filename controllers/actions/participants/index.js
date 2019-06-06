const ParticipantsRepository = require('../../../repositories/ParticipantsRepository');

async function action(req, res) {
    try {
        res.send(await ParticipantsRepository.getAllParticipantOfEvent(req.body.event._id));
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;