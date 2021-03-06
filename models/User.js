const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
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
  bucketlist: [{
    type: Schema.Types.ObjectId,
    ref: "BucketListItem"
  }],
  trips: [{
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

module.exports = User = mongoose.model("User", UserSchema);