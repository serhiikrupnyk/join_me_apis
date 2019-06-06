const express = require('express');
const router = express.Router();
const AuthSocialController = require('../controllers/AuthSocialController');
const AuthFacebookMiddleware = require('../middlewares/AuthFacebookMiddleware');
router.get('/authorize', AuthFacebookMiddleware.authorize);
router.get('/authenticate', AuthFacebookMiddleware.authenticate, AuthSocialController.authenticate);
module.exports = router;