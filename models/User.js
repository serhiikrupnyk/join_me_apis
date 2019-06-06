const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    social: {
        type: String
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    hash: String,
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto
        .randomBytes(16)
        .toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512')
        .toString('hex');
};

UserSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

UserSchema.methods.setJWT = function () {
    const dateNow = new Date();
    const expirationDate = new Date(dateNow);
    expirationDate.setDate(dateNow.getDate() + 60);

    return jwt.sign({
        id: this._id,
        email: this.email,
        expirationDate: parseInt(expirationDate.getTime() / 1000, 10)
    }, secret)
};
UserSchema.methods.authJSON = function () {
    return {
        token: this.setJWT(),
        _id: this._id,
        email: this.email
    }
};
const User = mongoose.model('User', UserSchema);
module.exports = User;

