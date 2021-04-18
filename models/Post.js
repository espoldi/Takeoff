const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title:  String,
    message: String,
    tags: [String],
    selectedFile: String,
    rating: {
        type: Number,
        default:  0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });

module.exports = Post = mongoose.model("Post", PostSchema);