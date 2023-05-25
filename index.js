const express = require("express");
const app = express()
const db = require("./db")
app.use(express.json())

app.use("/user",require("./router"))

let  PORT = process.env.PORT 

app.listen(7000,(err)=>{
    if(err) {
        console.log("error",err);
    } else {
    console.log("sever running on port 7000 http://localhost:7000")}
})