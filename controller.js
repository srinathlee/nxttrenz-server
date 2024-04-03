const User = require("./model");
const asyncHandler = require("./asynchandler");
const axios= require("axios");




// user register
exports.register = asyncHandler(async (req, res, next) => {  
    const { name, username, password} = req.body; 
    const email=username;

    // checking user existance
    let user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({message:"user already exist"});
    }

    const userDetails = {
      username: "rahul",
      password: "rahul@2021"
    };
    
    const config = {
      method: 'post',
      url: 'https://apis.ccbp.in/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: userDetails
    };
    
    const response=await axios(config)
    const {jwt_token}=response.data
    console.log(jwt_token)


    user = await User.create({
      name,
      email,
      password
    });

    // sendJwt(user, 201,"registerd successfully", res);  
    return res.status(201).json({message:"registration success",jwt_token});
  

  });


  
  
  //user login
  exports.login = asyncHandler(async (req,res,next) => {

    const {username, password } = req.body;
    const email=username;
  
    if (email == "" || password == "") {
      return res.status(403).json({message:'invalid credentials'})
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(403).json({message:"no user presnet"});
    }

    if (user.password!=password) {
      return res.status(403).json({message:"incorrect password or mail"});
    }

    const userDetails = {
      username: "rahul",
      password: "rahul@2021"
    };
    
    const config = {
      method: 'post',
      url: 'https://apis.ccbp.in/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: userDetails
    };
    
    const response=await axios(config)
    const {jwt_token}=response.data    

    res.status(200).json({message:"login successful",jwt_token}) 

  });