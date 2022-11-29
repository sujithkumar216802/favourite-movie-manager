const express = require('express');
const User = require('../controllers/User');
const router = express.Router();

router.post('/backend/logout', User.logoutUser);

module.exports = router;
