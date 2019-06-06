const Event = require('../models/Event');
const getAll = async () => {
    return await Event.find({}, 'name  description dateTime created')
        .populate('user', '_id firstName lastName email')
        .populate('address', '_id city place').exec();
};
const findById = async (eventId) => {
    return await Event.findById(eventId, 'name  description dateTime user address created')
        .populate('user', '_id firstName lastName email')
        .populate('address', '_id city place').exec();
};

async function store(eventData) {
    const event = new Event({
        name: eventData.name,
        description: eventData.description,
        dateTime: eventData.dateTime,
        user: eventData.user,
        address: eventData.address,
        tags: eventData.tags
    });
    return await event.save()
}

async function update(eventId, eventData) {
    const event = await Event.findById(eventId, 'name  description dateTime address');
    event.name = eventData.name;
    event.description = eventData.description;
    event.dateTime = eventData.dateTime;
    event.tags = eventData.tags;
    event.address = eventData.address;
    return await event.save();
}

const remove = async (eventId) => await Event.remove({_id: eventId});

module.exports = {
    getAll,
    findById,
    store,
    update,
    remove
};