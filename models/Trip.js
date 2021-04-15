const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TripSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itinerary: [{
    type: Schema.Types.ObjectId,
    ref: 'ItineraryItem'
  }]
});

module.exports = Trip = mongoose.model('Trip', TripSchema);