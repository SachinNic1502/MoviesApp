// routes/admin.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin user by username
    const adminUser = await User.findOne({ username, isAdmin: true });
    if (!adminUser) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, adminUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token for authentication
    const token = jwt.sign({ userId: adminUser._id, isAdmin: adminUser.isAdmin }, 'secretKey', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
