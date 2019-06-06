const UserCategoriesRepository = require('../../../repositories/UserCategoriesRepository');
const Show = require('../user/show');

async function action(req, res) {
    try {
        await UserCategoriesRepository.update(req.params.id, {
            categories: req.body.categories
        });
        return await Show(req, res);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = action;