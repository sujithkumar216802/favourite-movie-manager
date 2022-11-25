const express = require('express');
const bodyParser = require('body-parser')
const Authenticator = require('./utils/Authenticator');
const homeRouter = require('./routes/Home');
const loginRouter = require('./routes/Login');
const logoutRouter = require('./routes/Logout');
const registerRouter = require('./routes/Register');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(registerRouter);
app.use(loginRouter);

app.use(Authenticator.authenticateToken);

app.use(homeRouter);
// app.use(logoutRouter);

module.exports = app;
