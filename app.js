const dotenv = require('dotenv');
dotenv.config();

/* Populate elasticsearch */
require('./other/devops/manage-index.js')();

deleteIndex(function() {
    createIndex(function() {
        populateIndex(function() {
            console.log("Repopulated index");
        });
    })
});

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var populateRouter = require('./routes/populate');


var app = express();
var bodyParser = require('body-parser');
const { index } = require('./services/elasticsearch.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('eta').renderFile);
app.set('view engine', 'eta');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/populate', populateRouter);

module.exports = app;
