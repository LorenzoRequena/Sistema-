var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Solicitante = require('../models/Solicitante.js');
var Counter = require('../models/Counter');

/* GET ALL SolicitanteS */
router.get('/', function(req, res, next) {
  Solicitante.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* GET SINGLE Solicitante BY ID */
router.get('/:id', function(req, res, next) {
  Solicitante.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/last', function(req, res, next) {  
  var nExpediente = getLast("productid");
  if(nExpediente) {
    res.json(nExpediente)
  } else {
    res.json('Some error')
  }
});

function getLast(nodeName) {
  var sequenceDocument = Counter.findAndModify(
    {
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
 return sequenceDocument.sequence_value;
}
/* SAVE Solicitante */
router.post('/', function(req, res, next) {
  Solicitante.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Solicitante */
router.put('/:id', function(req, res, next) {
  Solicitante.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Solicitante */
router.delete('/:id', function(req, res, next) {
  Solicitante.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/bycedula/:cedula', function(req, res, next) {
 
  Solicitante.find({cedula:req.params.cedula}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;