const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItineraryItemSchema = require('./ItineraryItems');
const PostSchema = require('./Posts');

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
  status: {
    type: String,
    default: 'current',
    // element of array
    enum: ['current','complete','bucketList']
  },
  itinerary: [ItineraryItemSchema],
  //posts: [PostSchema]
});

module.exports = TripSchema;