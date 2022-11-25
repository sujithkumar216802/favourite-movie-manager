const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../db/User');
// const UserToken = require('../db/UserToken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, config.token_secret, async (err, decoded) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }

        req.email = decoded.email;
        next();
        // if (await UserToken.checkToken(user, token)) {
        //     req.user = user;
        //     next();
        // }
        // else {
        //     // email and token don't match
        //     return res.sendStatus(403);
        // }
    });
}

function generateAccessToken(email) {
    return jwt.sign({ email: email }, config.token_secret, { expiresIn: "1d" });
}

module.exports = {
    generateAccessToken: (email) => generateAccessToken(email),
    authenticateToken: (req, res, next) => authenticateToken(req, res, next)
};
