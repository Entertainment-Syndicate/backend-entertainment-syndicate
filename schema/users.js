const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteAnimeSchema = new Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  type: String,
  category: String,
  watchURL: String,
  episodes: String,
  score: String,
  rate: String,
  feedback: { type: String, default: 'test' },
});
const favoriteMovieSchema = new Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  type: String,
  category: String,
  voteAverage: String,
  voteCount: String,
  popularity: String,
  cover: String,
  feedback: { type: String, default: 'test' },
});
const favoriteGameSchema = new Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  type: String,
  category: String,
  installingURL: String,
  platform: String,
  publisher: String,
  developer: String,
  feedback: { type: String, default: 'test' },
});

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  favoriteAnime: [favoriteAnimeSchema],
  favoriteMovie: [favoriteMovieSchema],
  favoriteGame: [favoriteGameSchema],
});

// defining a model and sending it to requests functions.
const User = mongoose.model('user', userSchema);

module.exports = User;
