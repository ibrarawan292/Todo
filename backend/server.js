const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const todoRoutes = require('./Routes/todoRoutes')
const userRoutes = require('./Routes/userRoutes')
const connectDB = require('./Config/db')

connectDB();


app.use(bodyParser.json())
app.use(cors({
  origin: process.env.FRONT_END_URI,
  optionsSuccessStatus: 200
}))

//mounting

app.use('/api/v1' , todoRoutes)
app.use('/api/v1' , userRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server running on port : ${process.env.PORT}`)

})