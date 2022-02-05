const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleWare = require('./middlewares/error-handler')
//middleware
app.use(express.static('public'))
app.use(express.json()); // to have the req data in req.body

// routes

app.use("/api/v1/tasks",tasks)
 
app.use(notFound)
app.use(errorHandlerMiddleWare)
const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("server running at port 3000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()

