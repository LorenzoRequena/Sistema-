var express = require('express');
var router = express.Router();
var Solicitud = require('../models/Solicitud.js');

/* GET ALL SolicitudS */
router.get('/', function(req, res, next) {
  Solicitud.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* GET SINGLE Solicitud BY ID */
router.get('/:id', function(req, res, next) {
  Solicitud.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/last', function(req, res, next) {  
  console.log("estoy aqui")
  Solicitud.findOne({$query: {}, $orderby: {$natural : -1}}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

/* SAVE Solicitud */
router.post('/', function(req, res, next) {
  Solicitud.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Solicitud */
router.put('/:id', function(req, res, next) {
  Solicitud.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Solicitud */
router.delete('/:id', function(req, res, next) {
  Solicitud.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/bycedula/:cedula', function(req, res, next) {
 console.log("Encontraste la cedula yujuuu")
  Solicitud.find({cedula:req.params.cedula}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;