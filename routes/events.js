const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/EventsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', EventsController.index);
router.post('/', AuthMiddleware.required, EventsController.store);
router.get('/:id', EventsController.show);
router.put('/:id', AuthMiddleware.required, EventsController.update);
router.delete('/:id', AuthMiddleware.required, EventsController.delete);

module.exports = router;