const connectionString = "mongodb+srv://ujwal09:ujwalkumardanta786@cluster0.eovig.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"
const mongoose = require('mongoose');
main()
.then(()=>console.log("mongoDB connected"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(connectionString);
  }

