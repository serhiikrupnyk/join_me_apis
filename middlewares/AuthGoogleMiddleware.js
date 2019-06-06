const passport = require('passport');

module.exports = {
    authorize: passport.authenticate('google',{ scope: ['profile', 'email'] }),
    authenticate: passport.authenticate('google', {session: false})
};