const Category = require('../models/Category');

const getAll = async () => await Category.find({}, 'name').exec();
const findById = async (categoryId) => await Category.findById(categoryId).populate('tags', '_id name').exec();

async function store(categoryData) {
    const category = new Category({
        name: categoryData.name,
        tags: categoryData.tags
    });
    return await category.save();
}

async function update(categoryId, categoryData) {
    const category = await Category.findById(categoryId, 'name');
    category.name = categoryData.name;
    category.tags = categoryData.tags;
    return await category.save();
}

const remove = async (categoryId) => await Category.remove({_id: categoryId});

module.exports = {
    getAll,
    findById,
    store,
    update,
    remove
};