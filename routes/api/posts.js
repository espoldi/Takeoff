const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/postsController');

// Blog routes
router
  .route('/')
  .get(postsController.findAll)
  .post(postsController.create);

router
  .route('/:id')
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;