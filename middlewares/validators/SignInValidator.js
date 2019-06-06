const {check} = require('express-validator/check');
const UserRepository = require('../../repositories/UsersRepository');
const emailValidator = check('email').isEmail().custom(async (email) => {
    const user = await UserRepository.findByEmail(email);
    return user.length !== 0
}).withMessage('No such user with target email');

const passwordValidator = check('password').isLength({min: 6});
module.exports = [
    emailValidator,
    passwordValidator
];