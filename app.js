const dotenv = require('dotenv');
dotenv.config();var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var populateRouter = require('./routes/populate');


var app = express();

app.engine('html', require('eta').renderFile);
app.set('view engine', 'eta');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/', searchRouter);
app.use('/populate', populateRouter);

module.exports = app;
