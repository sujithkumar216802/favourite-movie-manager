const express = require('express');
const Movie = require('../controllers/Movie');
const Validator = require('../utils/Validator');
const router = express.Router();

router.get('/backend/', Movie.getAllMovies);
router.post('/backend/add', Validator.movie, Movie.addMovie);
router.put('/backend/update', Validator.movie, Movie.updateMovie);
router.delete('/backend/delete', Validator.deleteMovie, Movie.deleteMovie);

module.exports = router;
