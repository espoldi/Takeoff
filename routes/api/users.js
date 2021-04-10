const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

router
  .route('/')
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route('/:id')
  .get(usersController.findById)
  .post(usersController.login)
  .put(usersController.updatePassword)
  .delete(usersController.remove);

module.exports = router;
