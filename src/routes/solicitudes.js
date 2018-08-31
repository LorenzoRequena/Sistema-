var express = require('express');
var router = express.Router();
var Solicitud = require('../models/Solicitud.js');
var Counter = require('../models/Counter');

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
  Solicitud.findOne().sort('-created').exec(function(err, post) { 
    if (err) return next(err);
    res.json(post)
   });
});

/* Generador de numero de expediente*/
router.post('/', function(req, res, next) {
  Solicitud.findOne().sort('-created').exec(function(err, expediente) { 
    if (err) return next(err);
    expediente ? expediente.expediente = expediente.expediente.split("-", 3)[0] : expediente;
    expediente ? expediente = parseInt(expediente.expediente || 0) + 1 : expediente = 1;
    expediente = pad_with_zeroes(expediente, 4)
    console.log(expediente);
    var date = new Date();
    expediente = expediente + "-" + date.getFullYear()
    Solicitud.create({...req.body, expediente}, function (err, post) {
      if (err) return next(err);
      res.json(expediente);
    });
   });  
});
function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}
/*Movilizacion de documento*/
router.post('/actualizar/:expediente', function(req, res, next) {
  console.log(req.body);  
  Solicitud.findOneAndUpdate({expediente: req.params.expediente}, req.body, {new: true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*Eliminar */
 router.delete('/:id', function(req, res, next) {
  Solicitud.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*Buscar por cedula*/
 router.get('/bycedula/:cedula', function(req, res, next) {
  Solicitud.find({cedula:req.params.cedula}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*Buscar nro de expediente*/
  router.get('/byexpediente/:expediente', function(req, res, next) {
   Solicitud.find({expediente:req.params.expediente}, function (err, post) {
     if (err) return next(err);
     res.json(post);
   });
 });



module.exports = router;