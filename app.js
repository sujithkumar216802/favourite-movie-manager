const express = require('express');
const bodyParser = require('body-parser')
const homeRouter = require('./routes/Home');
const loginRouter = require('./routes/Login');
const logoutRouter = require('./routes/Logout');
const registerRouter = require('./routes/Register');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(homeRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(registerRouter);

module.exports = app;
