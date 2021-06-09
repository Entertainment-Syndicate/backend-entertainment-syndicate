const mongoose = require('mongoose');

const { Schema } = mongoose;

const feedSchema = new Schema({
  title: String,
  image: String,
  name: String,
  userImage: String,
  feedback: String,
});

const Feed = mongoose.model('feed', feedSchema);

module.exports = Feed;
