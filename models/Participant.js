const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now()
    }
});

const Participant = mongoose.model('Participant', ParticipantSchema);
module.exports = Participant;