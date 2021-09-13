const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  todo : {
    type : String,
    required : true
  }
})

const tododbs = mongoose.model('to_do' , schema);
module.exports = tododbs;