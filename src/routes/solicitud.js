var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Solicitante = require('../models/Solicitud.js');
var Solicitantes= require('../models/Solicitantes');



router.get('solicitantes/:cedula', function(req, res, next) {
    Solicitantes.find({cedula:req.params.cedula});
  });
module.exports = router;