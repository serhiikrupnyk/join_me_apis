const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const SignInValidator = require('../middlewares/validators/SignInValidator');
const SignUpValidator = require('../middlewares/validators/SignUpValidator');


router.post('/signIn', SignInValidator, AuthController.signIn);
router.post('/signUp', SignUpValidator, AuthController.signUp);
router.get('/signOut', AuthMiddleware.required, AuthController.signOut);

module.exports = router;