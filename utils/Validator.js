// for both add and update
function movie(req, res, next) {
    if (!("movie_name" in req.body)) {
        return res.status(400).send('Movie Name Is Missing.');
    }
    else if (req.body['movie_name'] == '') {
        return res.status(400).send('Movie Name Is Empty.');
    }

    if (!("movie_cast" in req.body)) {
        return res.status(400).send('Movie Cast Is Missing.');
    }
    else if (!(Array.isArray(req.body.movie_cast))) {
        return res.status(400).send('Invalid Value For Movie Cast.');
    }
    else if (req.body.movie_cast.length == 0) {
        return res.status(400).send('Movie Cast is Empty.');
    }
    else if (req.body.movie_cast.includes('')) {
        return res.status(400).send('Some values of Movie Cast is empty.');
    }

    if (!("genre" in req.body)) {
        return res.status(400).send('Genre Is Missing.');
    }
    else if (req.body['genre'] == '') {
        return res.status(400).send('Genre Is Empty.');
    }

    if (!("release_date" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else if (isNaN(Date.parse(req.body.release_date))) {
        return res.status(400).send('invalid release date.');
    }

    if (!("rating" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else if (!(parseInt(req.body.rating) == req.body.rating) || req.body.rating > 10 || req.body.rating < 1) {
        return res.status(400).send('Invalid Rating.');
    }

    next();
}

function deleteMovie(req, res, next) {
    if (!("id" in req.body)) {
        return res.status(400).send('Id Is Missing.');
    }
    else if (!(parseInt(req.body.id) == req.body.id)) {
        return res.status(400).send('Invalid Id.');

    }
    next();
}

function register(req, res, next) {
    const pattern = /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/;
    if (!("email" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else if (!pattern.test(req.body.email)) {
        return res.status(400).send('Invalid Email.');
    }

    if (!("password" in req.body)) {
        return res.status(400).send('Password Is Missing.');
    }
    else if (req.body.password.length < 8) {
        return res.status(400).send('Password too short.');
    }

    next();
}

module.exports = {
    movie: (req, res, next) => movie(req, res, next),
    deleteMovie: (req, res, next) => deleteMovie(req, res, next),
    register: (req, res, next) => register(req, res, next)
}
