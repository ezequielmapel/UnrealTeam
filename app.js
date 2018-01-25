var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();

// view engine setup
app.set('views', __dirname);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(passport.initialize());
app.use(passport.session());


// OTHER ROUTES
require('./passportConfig')(passport);
require('./routes/routeGoogle')(app, passport);



app.get('/', function(req, res){
    res.render('views/default/index.ejs');
});

app.listen(3000,'localhost', function(){
    console.log("Listening on 3000");
});

module.exports = app;
