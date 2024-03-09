const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  synopsis: String,
  genre: String,
  cast: [String],
  rating: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Movie', movieSchema);
