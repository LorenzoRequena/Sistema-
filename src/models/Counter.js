var mongoose = require('mongoose');

var CounterSc = new mongoose.Schema({
    _id: String,
    sequence_value: Number,
  });

  module.exports = mongoose.model('Counter', CounterSc);