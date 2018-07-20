var mongoose = require('mongoose');

var SolicitudSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    proposito: String,
    localizacion: String,
    cedula: String,
    observacion: String,
    encargado:String,
    expediente: String
  });

  module.exports = mongoose.model('Solicitud', SolicitudSc);