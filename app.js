require('./db/connect')
const express = require("express");
const app = express();
const tasks = require("./routes/tasks")


//middleware
app.use(express.json()); // to have the req data in req.body

// routes
app.get("/hello",(req,res)=>{
    res.send("page running");
})

app.use("/api/v1/tasks",tasks)





app.listen(3000,()=>{
    console.log("server running at port 3000")
})
