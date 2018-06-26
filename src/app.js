var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session= require('express-session');
var solicitud = require('./routes/solicitudes');
var users= require('./routes/user.js');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/zona-edu', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, '../dist/Sistema')));
app.use('/home', express.static(path.join(__dirname, '../dist/Sistema')));
app.use('/solicitudes', solicitud);
app.use('/user',users)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send();
});

var server = app.listen(3000, function () {
  console.log("app running on port.", server.address().port);
});

module.exports = app;