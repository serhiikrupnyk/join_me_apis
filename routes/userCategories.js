const express = require('express');
const router = express.Router();
const UserCategoriesController = require('../controllers/UserCategoriesController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.put('/:id', AuthMiddleware.required, UserCategoriesController.update);

module.exports = router;