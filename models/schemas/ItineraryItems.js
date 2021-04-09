const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItineraryItemSchema = new Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
    //ex: ['transportation, eating, sightseeing, social, downtime']
  }
});

module.exports = ItineraryItemSchema;