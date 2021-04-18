const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItineraryItemSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  tripId: {
    type: Schema.Types.ObjectId,
    ref: 'Trip'
  }
});

module.exports = ItineraryItem = mongoose.model('ItineraryItem', ItineraryItemSchema);
