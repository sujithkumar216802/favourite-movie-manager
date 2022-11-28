const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const config = require('./config.json');
const Authenticator = require('./utils/Authenticator');
const homeRouter = require('./routes/Home');
const loginRouter = require('./routes/Login');
const logoutRouter = require('./routes/Logout');
const registerRouter = require('./routes/Register');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", config.origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    if ('OPTIONS' === req.method) {
        return res.sendStatus(200);
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

app.use(registerRouter);
app.use(loginRouter);

app.use(Authenticator.authenticateToken);

app.use(homeRouter);
app.use(logoutRouter);

module.exports = app;
