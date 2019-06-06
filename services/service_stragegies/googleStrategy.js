const UsersRepository = require('../../repositories/UsersRepository');
const config = require('../../config');
module.exports = {
    credentials: {
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: "http://localhost:4000/google/authenticate"
    },
    handler: async function (accessToken, refreshToken, profile, cb) {
        try {
            const user = await UsersRepository.socialFindOrCreate({id: profile.id}, profile);
            return await cb(null, user);
        } catch (err) {
            cb(err, false, {message: 'Error in auth!'});
        }
    }
};