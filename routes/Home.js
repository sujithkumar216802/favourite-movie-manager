const express = require('express');
const Movie = require('../controllers/Movie');
const Validator = require('../utils/Validator');
const router = express.Router();

router.get('/', Movie.getAllMovies);
router.post('/add', Validator.movie, Movie.addMovie);
router.put('/update', Validator.movie, Movie.updateMovie);
router.delete('/delete', Validator.deleteMovie, Movie.deleteMovie);

module.exports = router;
