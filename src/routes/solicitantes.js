var express = require('express');
var router = express.Router();
var Solicitantes = require('../models/Solicitantes');

router.post('/', function (req, res, next) {
  console.log(JSON.stringify(req.body), "estoy aqui")
  Solicitantes.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/', function (req, res, next) {
  Solicitantes.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
router.get('/cedula/:cedula', function (req, res, next) {
  console.log(req.params);
  Solicitantes.find({
    cedula: req.params.cedula
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
