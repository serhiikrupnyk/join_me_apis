const express = require('express');
const router = express.Router();
const AuthSocialController = require('../controllers/AuthSocialController');
const AuthGoogleMiddleware = require('../middlewares/AuthGoogleMiddleware');
router.get('/authorize', AuthGoogleMiddleware.authorize);
router.get('/authenticate', AuthGoogleMiddleware.authenticate, AuthSocialController.authenticate);
module.exports = router;