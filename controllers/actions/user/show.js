const UsersRepository = require('../../../repositories/UsersRepository');

async function action(req, res) {
    try {
         res.send(await UsersRepository.findById(req.params.id));
    } catch (err) {
        res.sendStatus(500);
    }
}
module.exports = action;