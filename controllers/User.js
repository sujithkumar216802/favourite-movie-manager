const User = require("../service/User");

async function registerUser(req, res) {
    try {
        const exists = await checkIfUserExists(req.body.email);
        if (exists) {
            res.status(409).send('user already exists');
        }
        else {
            await User.createUser(req.body.email, req.body.password);
            res.sendStatus(201);
        }
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

async function checkIfUserExists(email) {
    return (await User.queryUserByEmail(email)).rowCount > 0;
}

async function checkCredentials(email, password) {
    const { rows } = await User.queryUserByEmail(email);
    return rows[0]['password'] === password;
}

async function loginUser(req, res) {
    try {
        const exists = await checkIfUserExists(req.body.email);
        if (exists) {
            const credentialsMatches = await checkCredentials(req.body.email, req.body.password);
            if (credentialsMatches) {
                res.sendStatus(200);
            }
            else {
                res.status(401).send('contains invalid credentials');
            }
        }
        else {
            res.status(401).send('user does not exist');
        }
    }
    catch (e) {
        console.error('Error Occurred', e);
        res.sendStatus(500);
    }
}

async function logoutUser(req, res) {

}

module.exports = {
    registerUser: (req, res) => registerUser(req, res),
    loginUser: (req, res) => loginUser(req, res),
    logoutUser: (req, res) => logoutUser(req, res)
};
