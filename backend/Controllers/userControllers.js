const User = require('../models/userSchema')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()



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


exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({email:email})

  if(!user){
       return next(new Error('email not found'))
  }

  const hash = user.password;
  const isPasswordMatch = await bcrypt.compare(password, hash)

  if(!isPasswordMatch){
      return next(new Error("password not Match"))
  }
 
  const token = jwt.sign({_id:user._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });

  // res.json({
  //   message: 'you are suucessfully logged in',
  //   user,
  //   token
  // })
  
  res.cookie('jwt_token', token, {httpOnly:true, expires: new Date(Date.now() + 60*60*1000)}).json({
   "message": "you are successfully logged in! Enjoy",
   user,

  })

}

exports.logout =  (req, res, next) =>{
  try {
    res.cookie('jwt_token', null,{expires: new Date(Date.now()), httpOnly: true}).json({
      success: true,
      message: "you are successfully logout"
  
    })
  } catch (error) {
    next();
  }
  
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