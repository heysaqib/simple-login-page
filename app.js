const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require("uuid");

const app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//load static assets
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({//making the session completely secret and unique
    secret:uuidv4(),// '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}))

app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/logout', logoutRouter);

module.exports = app;
