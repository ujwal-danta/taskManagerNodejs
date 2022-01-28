const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    res.send("page running");
})



app.listen(3000,()=>{
    console.log("server running at port 3000")
})
