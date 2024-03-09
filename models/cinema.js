const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: String,
  location: String,
  availableHalls: Number,
});
const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;


