const User = require('../models/User');

async function update(userId, userCategoriesData) {
    const user = await User.findById(userId, '').populate('categories');
    user.categories = userCategoriesData.categories;
    return await user.save();
}

module.exports = {
    update
};