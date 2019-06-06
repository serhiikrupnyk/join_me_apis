const express = require('express');
const router = express.Router();
const AdvertiseEventsRepository = require('../controllers/AdvertiseEventsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware.required, AdvertiseEventsRepository.show);

module.exports = router;