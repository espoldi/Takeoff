const express = require('express');
const router = express.Router();
const itineraryItemsController = require('../../controllers/itineraryItemsController');

// Itinerary Item Routes
router
  .route('/')
  .get(itineraryItemsController.findAll)
  .post(itineraryItemsController.create);

router
  .route('/:id')
  .get(itineraryItemsController.findById)
  .put(itineraryItemsController.update)
  .delete(itineraryItemsController.remove);

module.exports = router;