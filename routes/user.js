const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/:id', AuthMiddleware.required, UsersController.show);
router.put('/:id', AuthMiddleware.required, UsersController.update);

module.exports = router;