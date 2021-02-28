const express = require("express");
const app = express();
const path = require('path');
var engines = require('consolidate');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const port = process.env.PORT || 9001;
var mysql = require('mysql');
var connection  = require('./lib/db');
var authRouter = require('../assignment/routes/auth');


// viewed at http://localhost:9001
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', authRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

