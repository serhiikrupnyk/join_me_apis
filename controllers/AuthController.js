const Validator = require('../middlewares/validators/Validator');

const actions = {
    signIn: require('./actions/auth/signin'),
    signUp: require('./actions/auth/signup'),
    signOut: require('./actions/auth/signout')

};

module.exports = Validator(actions);
