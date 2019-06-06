const UsersRepository = require('../../../repositories/UsersRepository');
const Show = require('./show');

async function action(req, res) {
    try {
        await UsersRepository.update(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            categories: req.body.categories
        });
        await Show(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;