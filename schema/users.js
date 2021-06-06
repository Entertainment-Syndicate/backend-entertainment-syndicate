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
});
const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  favoriteAnime: [favoriteAnimeSchema],
  favoriteMovie: [favoriteMovieSchema],
  favoriteGame: [favoriteGameSchema],
});

const User = mongoose.model('user', userSchema);

module.exports = User;
