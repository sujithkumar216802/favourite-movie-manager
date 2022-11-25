const express = require('express');
const Movie = require('../controllers/Movie');
const router = express.Router();

router.get('/', Movie.getAllMovies);
router.post('/add', Movie.addMovie);
router.delete('/delete', Movie.deleteMovie);
router.put('/update', Movie.updateMovie);

module.exports = router;
