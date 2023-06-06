const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

const secretKey = 'your_secret_key';

// Route for user login and token generation
router.post('/login', (req, res) => {
  // Validate user credentials and generate token
  const { username, password } = req.body;

  // Perform user authentication logic
  // ...

  // If authentication is successful, generate a token
  const token = jwt.sign({ username }, secretKey);

  res.json({ token });
});

// Protected route that requires bearer token authentication
router.get('/profile', verifyToken, (req, res) => {
  // Access the authenticated user through req.user
  const user = req.user;

  // Return the user's profile data
  res.json({ username: user.username, profile: '...' });
});

module.exports = router;
