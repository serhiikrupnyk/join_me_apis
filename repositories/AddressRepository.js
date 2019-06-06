const Address = require('../models/Address');

const findById = async (addressId) => await Address.findById(addressId, 'city place').exec();

async function store(addressData) {
    const address = new Address({
        city: addressData.city,
        place: addressData.place
    });
    return await address.save();
}

async function update(addressId, addressData) {
    const address = await Address.findById(addressId, 'city place');
    address.city = addressData.city;
    address.place = addressData.place;
    return await address.save();
}

module.exports = {
    findById,
    store,
    update
};