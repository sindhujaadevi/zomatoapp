var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* schema for user */
var userSchema = new Schema({
  _id : {
    type : Number,
    required : true
  },
  name: {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
