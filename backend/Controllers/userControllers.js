const User =require('../models/userSchema')
const bcrypt = require('bcryptjs');



exports.createUser = async (req, res) => {
  const body = req.body;

  const username = body.username;
  const email = body.email;

  console.log(body.password)
  // const password = await bcrypt.hash(body.password, 10)

  

//  try {
//    await User.create(newUser)
//  } catch (error) {
//    console.log(error)
//  }
//   res.json({
//     "message": "Record has been saved"
//   })

}

exports.login = (req, res) => {
   const body = req.body;
}




exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find({})
   res.json({
     "data": user
   })
  } catch (error) {
     console.log(error)
  }

}

exports.getUserById = async (req, res) => {
  const user = await User.find(user => user.id == req.params.id)
  res.json(user)

}
exports.updateUser = (req, res) => {


}
exports.deleteUser = (req, res) => {


}