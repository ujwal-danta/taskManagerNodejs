const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect');
require('dotenv').config()

//middleware
app.use(express.json()); // to have the req data in req.body

// routes
app.get("/hello",(req,res)=>{
    res.send("page running");
})

app.use("/api/v1/tasks",tasks)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,()=>{
            console.log("server running at port 3000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()

