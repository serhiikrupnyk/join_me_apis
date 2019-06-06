const AddressRepository = require('../../../repositories/AddressRepository');

async function action(req, res) {
    try {
        return await AddressRepository.store({
            city: req.body.address.city,
            place: req.body.address.place
        });
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;