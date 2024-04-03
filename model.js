const mongoose = require("mongoose");;
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please Enter  Username"],
    maxlength: [40, "username should not exceed morethan 40 characters"],
    minlength: [4, "username should not be lessthan 4 characters"],
  },
  email:{
    type: String,
    required: [true, "Please Enter User Email"],
    unique:true
  },
  password:{
    type: String,
    required: [true, "Please Enter User Password"],
    minlength: [8,"password should be greaterthan 8 characters"],
    select: false,
  }
})
  
  module.exports = mongoose.model("User", userSchema);
