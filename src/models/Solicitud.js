var mongoose = require('mongoose');

var SolicitudSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    proposito: String,
    localizacion: String,
    observacion: String,
    solicitante_id: String,
    encargado:String,
    nroexpediente: String
    
  });

  module.exports = mongoose.model('Solicitud', SolicitudSc);