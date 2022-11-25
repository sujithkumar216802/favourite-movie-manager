const express = require('express');
const User = require('../controllers/User');
const router = express.Router();

router.get('/login', User.loginUser);

module.exports = router;
