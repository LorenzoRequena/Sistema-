var mongoose = require('mongoose');

var PersonalSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    nombre: String,
    cedula: String,
    apellido: String,
    ubicacion:String
  });
  module.exports = mongoose.model('Personal',PersonalSc);