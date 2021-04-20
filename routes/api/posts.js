const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/postsController');

// Blog Post routes
router
  .route('/')
  .get(postsController.findAll)
  .post(postsController.create);

router
  .route('/:id')
  .get(postsController.findById)
  .patch(postsController.update)
  .delete(postsController.remove);

module.exports = router;