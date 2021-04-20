const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BucketListItemSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = BucketListItem = mongoose.model('BucketListItem', BucketListItemSchema);
