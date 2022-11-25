const db = require('./db');

async function listOfAllMoviesByUserId(user_id) {
    return await db.query(`SELECT * FROM movies WHERE user_id=${user_id};`);
}

async function updateMovieById(movie_name, movie_cast, genre, release_date, rating, id) {
    return await db.query(`UPDATE movies SET movie_name=\'${movie_name}\', movie_cast=\'${movie_cast}\', genre=\'${genre}\', release_date=\'${release_date}\', rating=${rating} WHERE id=${id};`);
}

async function deleteMovieById(id) {
    return await db.query(`DELETE FROM movies WHERE id=${id};`);
}

async function createMovie(movie_name, movie_cast, genre, release_date, rating, user_id) {
    return await db.query(`INSERT INTO movies (movie_name, movie_cast, genre, release_date, rating, user_id) VALUES (\'${movie_name}\', \'${movie_cast}\', \'${genre}\', \'${release_date}\', ${rating}, ${user_id});`);
}

module.exports = {
    listOfAllMoviesByUserId: (user_id) => listOfAllMoviesByUserId(user_id),
    updateMovieById: (movie_name, movie_cast, genre, release_date, rating, id) => updateMovieById(movie_name, movie_cast, genre, release_date, rating, id),
    deleteMovieById: (id) => deleteMovieById(id),
    createMovie: (movie_name, movie_cast, genre, release_date, rating, user_id) => createMovie(movie_name, movie_cast, genre, release_date, rating, user_id)
};
