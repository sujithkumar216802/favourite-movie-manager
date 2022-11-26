const db = require('./db');

async function listOfAllMoviesByUserEmail(email) {
    return await db.query(`SELECT * FROM movies WHERE email=$1;`, [email]);
}

async function updateMovieById(movie_name, movie_cast, genre, release_date, rating, id) {
    return await db.query(`UPDATE movies SET movie_name=$1, movie_cast=$2, genre=$3, release_date=$4, rating=$5 WHERE id=$6;`[movie_name, movie_cast, genre, release_date, rating, id]);
}

async function deleteMovieById(id) {
    return await db.query(`DELETE FROM movies WHERE id=$1;`, [id]);
}

async function createMovie(movie_name, movie_cast, genre, release_date, rating, email) {
    return await db.query(`INSERT INTO movies (movie_name, movie_cast, genre, release_date, rating, email) VALUES ($1, $2, $3, $4, $5, $6);`, [movie_name, movie_cast, genre, release_date, rating, email]);
}

module.exports = {
    listOfAllMoviesByUserEmail: (email) => listOfAllMoviesByUserEmail(email),
    updateMovieById: (movie_name, movie_cast, genre, release_date, rating, id) => updateMovieById(movie_name, movie_cast, genre, release_date, rating, id),
    deleteMovieById: (id) => deleteMovieById(id),
    createMovie: (movie_name, movie_cast, genre, release_date, rating, email) => createMovie(movie_name, movie_cast, genre, release_date, rating, email)
};
