const db = require('../models');
const ItineraryItem = db.ItineraryItem;

module.exports = {
  findAll: async function (req, res) {
    let itineraryItems = await ItineraryItem.find({ tripId: req.query.tripId }).sort({ date: 1 });
    res.json(itineraryItems);
  },
  findById: async function (req, res) {
    let itineraryItem = await ItineraryItem.findById(req.params.id);
    res.json(itineraryItem);
  },
  create: async function (req, res) {
    let newItem = new ItineraryItem({
      date: req.body.date,
      activity: req.body.activity,
      tripId: req.body.tripId
    });
    let savedItem = await newItem.save();
    res.json(savedItem);
  },
  update: async function (req, res) {
    let item = await ItineraryItem.findById(req.params.id);
    let update = req.body;
    await item.updateOne(update);
    res.json(item);
  },
  remove: async function (req, res) {
    let item = await ItineraryItem.findById(req.params.id).deleteOne();
    res.json(item);
  }
}
