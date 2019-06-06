const express = require('express');
const router = express.Router();
const ParticipantsController = require('../controllers/ParticipantsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.post('/', AuthMiddleware.required, ParticipantsController.index);
router.post('/participate', AuthMiddleware.required, ParticipantsController.store);
router.delete('/:id', AuthMiddleware.required, ParticipantsController.delete);

module.exports = router;