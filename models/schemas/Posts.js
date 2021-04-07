const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  tags: Array,
  rating: Number
});

module.exports = Post = mongoose.model('posts', PostSchema);