const express = require('express');
const router = express.Router();
const TagsController = require('../controllers/TagsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware.required, TagsController.index);
router.post('/', AuthMiddleware.required, TagsController.store);
router.put('/:id', AuthMiddleware.required, TagsController.update);
router.delete('/:id', AuthMiddleware.required, TagsController.delete);

module.exports = router;