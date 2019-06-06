const EventsRepository = require('../../../repositories/EventsRepository');
const AddressRepository = require('../../../repositories/AddressRepository');
const Index = require('./index');

async function action(req, res) {
    try {
        await EventsRepository.update(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            dateTime: req.body.dateTime,
            address: req.body.address._id,
            tags: req.body.tags
        });

        await AddressRepository.update(req.body.address._id, {
            city: req.body.address.city,
            place: req.body.address.place
        });

        await Index(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;