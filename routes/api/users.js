const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

// USER ROUTES
router
  .route('/')
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.updatePassword)
  .delete(usersController.remove);

router
  .route('/login')
  .post(usersController.login);

module.exports = router;
