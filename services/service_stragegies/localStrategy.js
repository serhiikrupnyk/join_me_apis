const User = require('../../models/User');
module.exports = {
    credentials: {
        usernameField: 'email',
        passwordField: 'password'
    },
    handler: async function (email, password, done) {
        try {
            const user = await User.findOne({email}).exec();
            if (!user) {
                return done(null, false, {
                    error: {
                        message: 'Incorrect email or password!'
                    }
                })
            }
            if (!user.validatePassword(password)) {
                return done(null, false, {
                    error: {
                        message: 'Incorrect email or password!'
                    }
                })
            }
            return done(null, user)
        } catch (err) {
            return done(err)
        }
    }

};