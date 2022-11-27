// for both add and update
function movie(req, res, next) {
    if (!("movie_name" in req.body)) {
        return res.status(400).send('Movie Name Is Missing.');
    }

    if (!("movie_cast" in req.body)) {
        return res.status(400).send('Movie Cast Is Missing.');
    }
    else {
        if(!(Array.isArray(req.body.movie_cast))) {
            return res.status(400).send('Invalid movie_cast.');
        }
    }

    if (!("genre" in req.body)) {
        return res.status(400).send('Genre Is Missing.');
    }

    if (!("release_date" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else {
        if (isNaN(Date.parse(req.body.release_date))) {
            return res.status(400).send('invalid release date.');
        }
    }

    if (!("rating" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else {
        if (!(parseInt(req.body.rating) == req.body.rating) || req.body.rating > 10 || req.body.rating < 1) {
            return res.status(400).send('Invalid Rating.');
        }
    }
    next();
}

function deleteMovie(req, res, next) {
    if (!("id" in req.body)) {
        return res.status(400).send('Id Is Missing.');
    }
    else {
        if (!(parseInt(req.body.id) == req.body.id)) {
            return res.status(400).send('Invalid Id.');
        }
    }
    next();
}

function register(req, res, next) {
    if (!("email" in req.body)) {
        return res.status(400).send('Release Date Is Missing.');
    }
    else {
        const pattern = /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/;
        if (!pattern.test(req.body.email)) {
            return res.status(400).send('Invalid Email.');
        }
    }
    next();
}

module.exports = {
    movie: (req, res, next) => movie(req, res, next),
    deleteMovie: (req, res, next) => deleteMovie(req, res, next),
    register: (req, res, next) => register(req, res, next)
}
