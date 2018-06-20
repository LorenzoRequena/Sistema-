var express = require('express');
var router = express.Router();
var UserSchema = require('../models/User.js');

  router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body), "estoy aqui")
    UserSchema.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  router.post('/login', function(req, res, next) {
    console.log(JSON.stringify(req.body))
    console.log(JSON.stringify(UserSchema.authenticate))
   
    if (req.body.logusername && req.body.logpassword) {
      UserSchema.authenticate(req.body.logusername, req.body.logpassword, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.json(user);
        }
      });
    }
  });


  module.exports = router;