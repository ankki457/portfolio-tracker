const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,
  ticker: String,
  quantity: Number,
  buyPrice: Number,
});

module.exports = mongoose.model('Stock', stockSchema);