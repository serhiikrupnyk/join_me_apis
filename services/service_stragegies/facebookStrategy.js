const UsersRepository = require('../../repositories/UsersRepository');
const config = require('../../config');
module.exports = {
    credentials: {
        clientID: config.facebook.FACEBOOK_APP_ID,
        clientSecret: config.facebook.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:4000/facebook/authenticate",
        profileFields: ['id', 'name', 'photos', 'email']
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