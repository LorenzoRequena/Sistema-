var mongoose = require('mongoose');

var SolicitudSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    type: String,
    status: String,
    nota: String,
    solicitante_id: String,
    nroexpediente: String
    
  });

  module.exports = mongoose.model('Solicitud', SolicitudSc);