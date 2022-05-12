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

app.use('/api/v1', todoRoutes)
app.use('/api/v1', userRoutes)

// handling unhandled routes

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});


// handling schema validation error

app.use((err, req, res, next) => {
  // logic

  let error = {...err}

  error.message = err.message

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`
    error = new Error(message)
  }

  // Wrong Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new Error(message)
  }
  // Wrong Mongoose duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate ${object.keys(err.keyValue)} entered`
    error = new Error(message)
  }

  res.json({
    success: false,
    message: error.message
  })

})


app.listen(process.env.PORT, () => {
  console.log(`Server running on port : ${process.env.PORT}`)

})