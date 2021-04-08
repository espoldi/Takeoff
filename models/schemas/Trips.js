const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TripSchema = new Schema({
  tripName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    // element of array
    enum: ['current','complete','bucketList']
  },
});

module.exports = TripSchema;