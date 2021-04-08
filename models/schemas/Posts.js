const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // image: (type object?)
  tags: [String]
  rating: Number
});

module.exports = PostSchema;