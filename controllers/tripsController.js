const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.User.findById(req.params.id)
      .then(user => res.json(user.trips))
      .catch(err => res.status(422).json(err));
  },
  
}
