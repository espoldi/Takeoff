const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title:  String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default:  0
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  });

const Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;