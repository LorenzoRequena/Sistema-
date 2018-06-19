var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserSchema = require('../models/User.js');


  
  /* save users in db */
  router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body))
    UserSchema.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  


  module.exports = router;