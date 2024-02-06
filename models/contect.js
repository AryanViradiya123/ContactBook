const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contectdata = new Schema({
  mobilenumber: Number,
  name:String,
  lastname: String
});

const contect = mongoose.model('contect',contectdata)
module.exports=contect