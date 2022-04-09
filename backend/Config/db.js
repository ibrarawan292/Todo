const mongoose = require('mongoose');



const connectDB = () =>{
   try {
    mongoose.connect("mongodb://0.0.0.0:27017/tododb").then((con) =>{
        console.log('Database connected');
    })
   } catch (error) {
       console.log(error)
   }
}

module.exports = connectDB