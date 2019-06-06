const passport = require('passport');

function signIn(req, res, next) {
    return passport.authenticate('local',
        {session: false},
        (err, user) => {
            if (err) {
                return next(err);
            }
            if (user) {
                return res.json({user: user.authJSON()});
            }
            return res.sendStatus(400).info;
        })(req, res, next);
}

module.exports = signIn;
