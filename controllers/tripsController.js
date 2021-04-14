const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.User.findById(req.params.id)
      .then(user => res.json(user.trips))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.findById(req.params.id)
      .then(user => {
        user.trips.push(req.body);
        user.save();
        res.json(user.trips);
      })
      .catch(err => res.status(422).json(err));
  }
}
