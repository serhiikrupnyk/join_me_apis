const express = require('express');
const router = express.Router();

router.use('/', require('./greetings'));
router.use('/auth', require('./auth'));
router.use('/facebook', require('./authFacebook'));
router.use('/google', require('./authGoogle'));
router.use('/events', require('./events'));
router.use('/categories', require('./categories'));
router.use('/tags', require('./tags'));
router.use('/user', require('./user'));
router.use('/user_categories', require('./userCategories'));
router.use('/advertise_events', require('./advertiseEvents'));
router.use('/participants', require('./participants'));
router.all('*', (req, res) => {
    res.status(404).send({msg: 'Not found'});
});
router.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({
            message: 'Invalid token'
        });
    }
});

module.exports = router;