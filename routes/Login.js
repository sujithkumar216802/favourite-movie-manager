const express = require('express');
const User = require('../controllers/User');
const router = express.Router();

router.post('/login', User.loginUser);

module.exports = router;
