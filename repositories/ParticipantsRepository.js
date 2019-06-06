const Participant = require('../models/Participant');

const getAllParticipantOfEvent = async eventId => await Participant.find({'event': eventId}).populate('user').populate('event').exec();

async function store(participantData) {
    const participant = new Participant({
        user: participantData.user,
        event: participantData.event
    });
    await participant.save();
}

const remove = async participantId => await Participant.remove({_id: participantId}).exec();

module.exports = {
    getAllParticipantOfEvent,
    store,
    remove
};