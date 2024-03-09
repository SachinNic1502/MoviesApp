const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const bookingRoutes = require('./routes/bookings');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const paymentRoutes = require('./routes/payments');
const cinemaRoutes = require('./routes/cinemas');


const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/movieBooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/movies', movieRoutes);
app.use('/bookings', bookingRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/payment', paymentRoutes);
app.use('/cinemas', cinemaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
