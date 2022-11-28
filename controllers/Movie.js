const Movie = require('../db/Movie');

async function addMovie(req, res) {
    try {
        await Movie.createMovie(req.body.movie_name, req.body.movie_cast, req.body.genre, req.body.release_date, req.body.rating, req.email);
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred While Adding a Movie', e);
        res.sendStatus(500);
    }
}

async function deleteMovie(req, res) {
    try {
        await Movie.deleteMovieById(req.body.id);
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred While Deleting a Movie', e);
        res.sendStatus(500);
    }
}

async function updateMovie(req, res) {
    try {
        await Movie.updateMovieById(req.body.movie_name, req.body.movie_cast, req.body.genre, req.body.release_date, req.body.rating, req.body.id)
        res.sendStatus(200);
    }
    catch (e) {
        console.error('Error Occurred While Updating a Movie', e);
        res.sendStatus(500);
    }
}

async function getAllMovies(req, res) {
    try {
        var { rows } = await Movie.listOfAllMoviesByUserEmail(req.email);
        for (var i = 0; i < rows.length; i++) {
            rows[i]['release_date'] = (new Date(rows[i]['release_date'])).toLocaleString();
        }
        res.status(200).json(rows);
    }
    catch (e) {
        console.error('Error Occurred While Getting All Movies of a user', e);
        res.sendStatus(500);
    }
}

module.exports = {
    addMovie: (req, res) => addMovie(req, res),
    updateMovie: (req, res) => updateMovie(req, res),
    deleteMovie: (req, res) => deleteMovie(req, res),
    getAllMovies: (req, res) => getAllMovies(req, res)
};
