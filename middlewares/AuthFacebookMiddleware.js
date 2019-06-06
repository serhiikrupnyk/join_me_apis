const passport = require('passport');

module.exports = {
    authorize: passport.authenticate('facebook'),
    authenticate: passport.authenticate('facebook', {session: false})
};