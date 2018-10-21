/*   var mongoose=require('mongoose')

var Homeservicesuser = mongoose.model('Homeservicesuser',
{
  email:{
    type:String,
    required:true,
    unique:true,
  },

  password:{
    type:String,
    required:true,
    trim:true
  },
  })
module.exports = {Homeservicesuser} */


//////////////OR//////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
},
    password: String
});

const User = mongoose.model('userhome', UserSchema)
module.exports =  { User }
