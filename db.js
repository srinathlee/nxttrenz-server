const mongoose=require("mongoose");


const db=()=>{
    mongoose.connect("mongodb://localhost:27017/nxttrenz").then(()=>{console.log("db is connected")}).catch((e)=>{console.log(e)})
}

module.exports=db;