const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');

// Get all cinemas
router.get('/view', async (req, res) => {
  try {
    const cinemas = await Cinema.find();
    res.status(200).json(cinemas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new cinema
router.post('/add', async (req, res) => {
  try {
    const { name, location, availableHalls } = req.body;

    // Basic validation
    if (!name || !location || !availableHalls) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newCinema = new Cinema({
      name,
      location,
      availableHalls,
    });

    await newCinema.save();
    res.status(201).json(newCinema);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
