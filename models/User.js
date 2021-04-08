const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = require('./schemas/Trips');

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  trips: [TripSchema]
});

module.exports = User = mongoose.model("users", UserSchema);