const {validationResult} = require('express-validator/check');
const handler = {
    apply: function (target, thisArgs, argumentsList) {
        const req = argumentsList[0];
        const res = argumentsList[1];
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            return target(...argumentsList);
        }
    }
};
module.exports = handler;
