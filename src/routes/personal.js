var express = require('express');
var router = express.Router();
var Personal = require('../models/Personal');

router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body), "estoy aqui")
    Personal.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  router.get('/bycedula/:cedula', function(req, res, next) {
    console.log(JSON.stringify(req.params), "estoy aqui")
    Personal.find({cedula:req.params.cedula}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  router.post('/actualizar/:cedula', function(req, res, next) {
    console.log(JSON.stringify(req.params), "estoy aqui")
    console.log(req.body);  
    Personal.findOneAndUpdate({cedula: req.params.cedula}, req.body, {new: true}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  router.get('/', function(req, res, next) {
    Personal.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
module.exports = router;