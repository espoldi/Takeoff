const db = require('../models');
const ItineraryItem = db.ItineraryItem;

module.exports = {
  findAll: async function (req, res) {
    let itineraryItems = await ItineraryItem.find({ tripId: req.body.tripId });
    res.json(itineraryItems);
  },
  findById: async function (req, res) {
    let itineraryItem = await ItineraryItem.findById(req.params.id);
    res.json(itineraryItem);
  },
  create: async function (req, res) {
    let newItem = new ItineraryItem(req.body);
    let savedItem = await newItem.save();
    res.json(savedItem);
  }
}
