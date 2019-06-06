const AdvertiseEventsRepository = require('../../../repositories/AdvertiseEventsRepository');

async function action(req, res) {
    try {
        res.send(await AdvertiseEventsRepository.show(req.user.id));
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;