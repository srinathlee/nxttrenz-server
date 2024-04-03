
const express=require("express");
const app=express()
const port=3000;
const db=require("./db")
const router=require("./router")
const cors=require("cors")

app.use(cors())
app.use(express.json())
app.use("/api",router)
db();
app.listen(port,()=>{console.log("app is running......",port)})