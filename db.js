const mongoose=require("mongoose");


const db=()=>{
    mongoose.connect(process.env.dburi).then(()=>{console.log("db is connected")}).catch((e)=>{console.log(e)})
}

module.exports=db;