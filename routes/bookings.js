// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const generatePDFFromHTML = require('../utils/pdfGenerator');

// Book a seat
router.post('/bookseat', async (req, res) => {
  try {
    const { movieId, theater, seatNumber, customerName } = req.body;

    // Validate movieId, ensure it exists in your database

    // Create a new booking
    const newBooking = new Booking({ movie: movieId, theater, seatNumber, customerName });
    await newBooking.save();

    // Populate the movie field when retrieving the booking details
    const populatedBooking = await Booking.findById(newBooking._id).populate('movie');
    if (!populatedBooking) {
      throw new Error('Booking not found');
    }

    // Generate HTML content (customize as needed)
    const htmlContent = `
      <html>
        <head>
          <title>Movie Ticket</title>
        </head>
        <body>
          <h1>Movie Ticket - ${populatedBooking.movie.title}</h1>
          <p>Theater: ${populatedBooking.theater}</p>
          <p>Customer Name: ${populatedBooking.customerName}</p>
          <p>Seat Number: ${populatedBooking.seatNumber}</p>
        </body>
      </html>
    `;

    // Generate PDF
    const pdfBuffer = await generatePDFFromHTML(htmlContent);

    // Send the PDF as a response for download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=movie_ticket.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
