const Movie = require('../service/Movie');

async function addMovie(req, res) {
    try {
        await Movie.createMovie(req.body.movie_name, req.body.movie_cast, req.body.genre, req.body.release_date, req.body.rating, req.body.user_id);
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

async function deleteMovie(req, res) {
    try {
        await Movie.deleteMovieById(req.body.id);
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

async function updateMovie(req, res) {
    try {
        await Movie.updateMovieById(req.body.movie_name, req.body.movie_cast, req.body.genre, req.body.release_date, req.body.rating, req.body.id)
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

async function getAllMovies(req, res) {
    try {
        await Movie.listOfAllMoviesByUserId(req.body.user_id);
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

module.exports = {
    addMovie: (req, res) => addMovie(req, res),
    updateMovie: (req, res) => updateMovie(req, res),
    deleteMovie: (req, res) => deleteMovie(req, res),
    getAllMovies: (req, res) => getAllMovies(req, res)
};
