var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');  
var axios = require('axios');  
var multer = require('multer');

var index = require('./routes/index');
var users = require('./routes/users'); 
var students = require('./routes/students'); 
var cohorts = require('./routes/cohorts');

var app = express();  
var router = express.Router();  

var mongoose = require('mongoose'); 
var dev_db_url = 'mongodb://psarson:badgernads1@ds149495.mlab.com:49495/mp-trilogy-hackathon-f2017'
mongoose.connect(dev_db_url, { useMongoClient: true }) 
var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users); 
app.use('/students', students); 
app.use('/cohorts', cohorts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// CORS
app.use(function(req, res, next) {   
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin: http://localhost:3000');  
  res.header('Access-Control-Allow-Origin: http://localhost:3000/setup'); 
  res.header('Access-Control-Allow-Headers: Content-Type, multipart/form-data');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});  


module.exports = app;
