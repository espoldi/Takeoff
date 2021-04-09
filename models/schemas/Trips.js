const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItineraryItemSchema = require('./ItineraryItems');
const PostSchema = require('./Posts');

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
  itinerary: [ItineraryItemSchema],
  posts: [PostSchema]
});

module.exports = TripSchema;