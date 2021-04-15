const express = require('express');
const router = express.Router();
const tripsController = require('../../controllers/tripsController');

// Trip Routes
router
  .route('/')
  .get(tripsController.findAll)
  .post(tripsController.create);
  
router
  .route('/:id')
  .get(tripsController.findById)
  .put(tripsController.update);

module.exports = router;
