const db = require('../models');
const ItineraryItem = db.ItineraryItem;

module.exports = {
  findAll: async function (req, res) {
    let itineraryItems = await ItineraryItem.find({ tripId: req.body.tripId });
    res.json(itineraryItems);
  },
  
}
