const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItineraryItemSchema = new Schema({

});

module.exports = ItineraryItem = mongoose.model('itineraryItems', ItineraryItemSchema);