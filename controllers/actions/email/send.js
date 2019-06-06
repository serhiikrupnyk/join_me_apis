const EmailService = require('../../../services/EmailService');
const UserRepository = require('../../../repositories/UsersRepository');

async function action(req, res) {
    try {
        const userEmails = await UserRepository.getUserEmailsByEventTags(req.body.tags);
        const emails = userEmails.map((currentUserEmail) => currentUserEmail.email).join(', ');
        const user = await UserRepository.findById(req.user.id);
        const emailData = await {
            to: emails,
            subject: 'There is new event for you!',
            text: '',
            eventData: {
                name: req.body.name,
                description: req.body.description,
                dateTime: req.body.dateTime,
                user: user,
                address: req.body.address,
            }
        };
        await EmailService.sendEmail(emailData);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = action;