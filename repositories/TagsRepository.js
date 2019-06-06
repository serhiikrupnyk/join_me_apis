const Tag = require('../models/Tag');

const getAll = async () => await Tag.find({}, 'name').exec();
const findById = async (tagId) => await Tag.findById(tagId, 'name').exec();

async function store(tagData) {
    const tag = new Tag({
        name: tagData.name
    });
    return await tag.save();
}

async function update(tagId, tagData) {
    const tag = await Tag.findById(tagId, 'name');
    tag.name = tagData.name;
    return await tag.save();
}

const remove = async (tagId) => Tag.remove({_id: tagId});

module.exports = {
  getAll,
  findById,
  store,
  update,
  remove
};