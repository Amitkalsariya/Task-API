const mongoose=require('mongoose')
const Schema = mongoose.Schema;


const User_Model = new Schema({
  fname:{
    type:String,
    trim:true
  },
  lname:{
    type:String,
    trim:true

  },
  DOB:{
    type:Date
  },
  email:{
    type:String,
    unique:true
    
  },
  password:{
    type:String
  },
  address:{
    type:String
  }

});
module.exports=mongoose.model("User",User_Model)