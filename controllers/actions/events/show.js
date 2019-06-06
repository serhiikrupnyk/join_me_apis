const EventsRepository = require('../../../repositories/EventsRepository');

async function action(req, res) {
    try {
        res.send( await EventsRepository.findById(req.params.id));
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;