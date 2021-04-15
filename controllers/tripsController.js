const db = require('../models');
const Trip = db.Trip;

module.exports = {
  findAll: async function (req, res) {
    let trips = await Trip.find({ user: req.params.id });
    res.json(trips);
  },
  create: async function (req, res) {
    let newTrip = new Trip(req.body);
    let savedTrip = await newTrip.save();
    res.json(savedTrip);
  }
}
