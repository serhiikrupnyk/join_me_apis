const User = require('../../../models/User');

function signUp(req, res) {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    user.setPassword(req.body.password);

    user.save().then(() => {
        return res.json({user: user.authJSON()});
    }).catch(err => res.sendStatus(500));
}

module.exports = signUp;
