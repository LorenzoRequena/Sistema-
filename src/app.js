var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var solicitud = require('./routes/solicitudes');
var solicitantes = require('./routes/solicitantes');
var users = require('./routes/user.js');
var personal = require('./routes/personal.js');
var app = express();
var MongoStore = require('connect-mongo')(session);
var MONGO_URL = 'mongodb://127.0.0.1:27017/auth';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/zona-edu', {
    promiseLibrary: require('bluebird')
  })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(function (req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:4200', 'http://localhost:4200'];
  var origin = req.headers.origin;
  console.log(origin);
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  'extended': 'false'
}));
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    url: MONGO_URL,
    autoReconnect: true
  })
}));
app.use(express.static(path.join(__dirname, '../dist/Sistema')));
app.use('/home', express.static(path.join(__dirname, '../dist/Sistema')));
app.use('/solicitantes', solicitantes);
app.use('/solicitudes', solicitud);
app.use('/user', users);
app.use('/personal',personal);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
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
