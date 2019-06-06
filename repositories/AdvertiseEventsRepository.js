const User = require('../models/User');
const Event = require('../models/Event');

async function findAdvisedEvents(user) {
    let tags = user.categories
        .map((category) => category.tags)
        .reduce((tags, value) => tags.concat(value));
    return await Event.find({'tags': {$in: tags}})
        .populate('address')
        .populate('user', 'firstName lastName');
}

async function show(userId) {
    const user = await User.findById(userId, '_id').populate('categories');
    const events = await findAdvisedEvents(user);
    return await events;
}

module.exports = {
    show
};