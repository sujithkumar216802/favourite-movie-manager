const express = require('express');
const User = require('../controllers/User');
const router = express.Router();

router.post('/register', User.registerUser);

module.exports = router;
