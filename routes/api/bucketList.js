const express = require('express');
const router = express.Router();
const bucketListController = require('../../controllers/bucketListItemsController');

// Itinerary Item Routes
router
  .route('/')
  .get(bucketListController.findAll)
  .post(bucketListController.create);

router
  .route('/:id')
  .get(bucketListController.findById)
  .patch(bucketListController.update)
  .delete(bucketListController.remove);

module.exports = router;