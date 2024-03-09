const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

const key_id = 'rzp_test_FkxdGz0xjbJ7kR';
const key_secret = 'oojhEjuEb7GnWg4VTv8cWI9d';  // Replace with your actual secret key

const razorpay = new Razorpay({
  key_id,
  key_secret,
});

// Endpoint for initiating a payment
router.post('/create-payment', async (req, res) => {
  const { amount } = req.body;

  // Validate the presence of amount and ensure it's a valid number
  if (!amount || isNaN(amount)) {
    return res.status(400).json({ error: 'Invalid amount in the request' });
  }

  const options = {
    amount: amount * 100,  // Convert amount to paise
    currency: 'INR',
    receipt: 'order_receipt_' + Math.floor(Math.random() * 1000),
  };

  try {
    const order = await razorpay.orders.create(options);
    const amountInRupees = order.amount / 100;  // Convert amount to rupees
    res.json({ orderId: order.id, amount: amountInRupees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
