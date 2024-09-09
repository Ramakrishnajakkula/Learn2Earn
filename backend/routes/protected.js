const express = require('express');
const router = express.Router();
const { userAuth, adminAuth } = require('../middleware/auth');

// Example protected route for users
router.get('/user-dashboard', userAuth, (req, res) => {
  res.status(200).send('Welcome to the user dashboard');
});

// Example protected route for admins
router.get('/admin-dashboard', adminAuth, (req, res) => {
  res.status(200).send('Welcome to the admin dashboard');
});

module.exports = router;
