const db = require('../models');
const Trip = db.Trip;

module.exports = {
  findAll: async function (req, res) {
    let trips = await Trip.find({ userId: req.query.userId }).sort({ start: -1 });
    res.json(trips);
  },
  findById: async function (req, res) {
    let trip = await Trip.findById(req.params.id);
    res.json(trip);
  },
  create: async function (req, res) {
    let newTrip = new Trip({
      name: req.body.name,
      location: req.body.location,
      start: req.body.start,
      end: req.body.end,
      userId: req.body.userId
    });
    let savedTrip = await newTrip.save();
    res.json(savedTrip);
  },
  update: async function (req, res) {
    let trip = await Trip.findById(req.params.id);
    let update = req.body;
    await trip.updateOne(update);
    let updatedTrip = await Trip.findById(req.params.id);
    res.json(updatedTrip);
  },
  remove: async function (req, res) {
    let trip = await Trip.findById(req.params.id).deleteOne();
    res.json(trip);
  }
}
