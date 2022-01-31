const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
res.send('get all tasks')
}
const createTask = async (req,res)=>{
    try{
        const task = await new Task(req.body)
        await task.save()
        res.json({task})
    }
    catch(error){
    console.log(error)
    }
   
}
const getTask = (req,res)=>{
    res.json({
        id: req.params.id
    })
}
const updateTask = (req,res)=>{
    res.send('update task')
}
const deleteTask = (req,res)=>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}