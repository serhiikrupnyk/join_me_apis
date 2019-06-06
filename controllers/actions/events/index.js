const EventsRepository = require('../../../repositories/EventsRepository');

async function action(req, res) {
    try {
        const events = await EventsRepository.getAll();
        res.send({events});
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;
