const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    }
});

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;