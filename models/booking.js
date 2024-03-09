const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  theater: String, // Add theater name
  seatNumber: Number,
  customerName: String, // Add customer name
});

module.exports = mongoose.model('Booking', bookingSchema);
