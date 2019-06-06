const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    }],
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});
const Event = mongoose.model('Event', EventSchema);
module.exports = Event;