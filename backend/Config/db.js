const mongoose = require('mongoose');
const dotenv = require('dotenv').config()


const connectDB = () =>{
   try {
    mongoose.connect(process.env.DB_URI).then((con) =>{
        console.log('Database connected');
    })
   } catch (error) {
       console.log(error)
   }
}

module.exports = connectDB