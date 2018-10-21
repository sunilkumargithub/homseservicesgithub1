/* var mongoose=require('mongoose')
var customer = mongoose.model('customer',

{
  servicetype:{
    type:String,
    required:true},

  name:{
    type:String,
    required:true,
    trim:true},

    flatno:{
      type:String,
      required:true,
      trim:true},

  mobile:{
    type: Number,
    trim:true},


  description:{
    type:String,
    trim:true,
    required:false
  },
  status:{
    type:String,
    trim:true,
    required:false
  },
  creator: { type:mongoose.Schema.Types.ObjectId, ref:"userhome" , required: true}
  })
module.exports = {customer} */


/////////////////////////////////////////////////////
//////using schema
var mongoose=require('mongoose')
var customerschema = mongoose.Schema;

var Customer = new customerschema(

{
  servicetype:{
    type:String,
    required:true},

  name:{
    type:String,
    required:true,
    trim:true},

    flatno:{
      type:String,
      required:true,
      trim:true},

  mobile:{
    type: Number,
    trim:true},


  description:{
    type:String,
    trim:true,
    required:false
  },
  status:{
    type:String,
    trim:true,
    required:false
  },
 creator: { type:mongoose.Schema.Types.ObjectId, ref:"userhome" , required: true}
  })
  const CustomerHome = mongoose.model('customer' , Customer);
module.exports = {CustomerHome}
