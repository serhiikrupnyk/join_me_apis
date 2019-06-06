const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    create: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;