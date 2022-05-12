const User = require('../models/userSchema')
const bcrypt = require('bcryptjs');



exports.createUser = async (req, res, next) => {

  const body = req.body;

  // if (!body.username) {
  //   return res.json({
  //     "message": "username is required"
  //   })
  // }
  // if (!body.email) {
  //   return res.json({
  //     "message": "email is required"
  //   })
  // }
  // if (!body.password) {
  //   return res.json({
  //     "message": "password is required"
  //   })
  // }
  // if (body.password.length<6) {
  //   return res.json({
  //     "message": "password should be atleast 6 character long"
  //   })
  // }

  const username = body.username;
  const email = body.email;
  const password = await bcrypt.hash(body.password, 10);


  const newUser = {
    username: username,
    email: email,
    password: password
  }

  try {
     const user = await User.create(newUser)
     res.json({
        "message": "Record has been saved"
    })
  } catch (error) {
    next(error)
  }

}


exports.login = (req, res) => {
  const body = req.body;
}




exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    res.json({
      users: users
    })
  } catch (error) {
    next(error)
  }

}

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.json({
      user: user
    })
  } catch (error) {
     next(error)
  }

}
exports.updateUser = (req, res) => {


}
exports.deleteUser = (req, res) => {


}