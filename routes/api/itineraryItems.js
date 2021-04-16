const express = require('express');
const router = express.Router();
const itineraryItemsController = require('../../controllers/itineraryItemsController');

// Blog Post routes
router
  .route('/')
  .get(itineraryItemsController.findAll)
  .post(itineraryItemsController.create);

router
  .route('/:id')
  .get(itineraryItemsController.findById);
//   .patch(itineraryItemsController.update)
//   .delete(itineraryItemsController.remove);

module.exports = router;