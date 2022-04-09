const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const todosRoutes = require('./Routes/todosRoutes')
const userRoutes = require('./Routes/usersRoutes')
const connectDB = require('./Config/db')

connectDB();


app.use(bodyParser.json())
app.use(cors())

//mounting

app.use('/api/v1' , todosRoutes)
app.use('/api/v1' , userRoutes)


app.listen(port, () => {
  console.log(`Server running on port : ${port}`)

})