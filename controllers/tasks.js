const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/async')


const getAllTasks = asyncWrapper( async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})


const createTask = async (req,res)=>{
    try{
        const task = await new Task(req.body)
        await task.save()
        res.json({task})
    }
    catch(error){
    res.status(500).json({error})
    }
   
}
const getTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({
            _id: taskID
        })
        if(!task){
            return  res.status(404).json({
                msg: `NO TASK WITH ID ${taskID}`
            })
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
      })
    
      if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
      }
    
      res.status(200).json({ task })
    } catch (error) {
     res.status(500).json({error})   
    }
  
}
const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({
            _id: taskID
        })
        if(!task){
            return res.status(404).json({
                msg: `NO TASK WITH ID ${taskID}`
            })
        }
            res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}