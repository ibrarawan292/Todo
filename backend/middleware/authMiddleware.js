
const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");




exports.isAuthenticatedUser = async (req, res, next) =>{
    const {jwt_token} = req.cookies;

   if(!jwt_token){
       return  res.json({
        success: false,
        message: "please login to access to this resource"
    })
   }

   const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET);

   req.user = await User.findById(decoded._id)

   next();
}