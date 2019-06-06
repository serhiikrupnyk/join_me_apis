const {check} = require('express-validator/check');
const UsersRepository = require('../../repositories/UsersRepository');

const firstNameValidator = check('firstName').isLength({max: 256, min: 2});
const lastNameValidator = check('lastName').isLength({max: 256, min: 2});

const emailValidator = check('email').isEmail().custom(async (email) => {
    const users = await UsersRepository.findByEmail(email);
    return users.length === 0;
}).withMessage('E-mail already in use');

const passwordValidator = check('password').isLength({min: 6});

const passwordConfirmationValidator = check('passwordConfirmation').custom((value, {req}) => {
    return value === req.body.password;
}).withMessage('Password confirmation does not match password');

module.exports =[
    firstNameValidator,
    lastNameValidator,
    emailValidator,
    passwordValidator,
    passwordConfirmationValidator
];