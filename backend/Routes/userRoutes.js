const express = require('express')
const router = express.Router()
const {login,createUser, getAllUsers, getUserById, updateUser, deleteUser,logout} = require('../Controllers/userControllers')
const {isAuthenticatedUser} = require('../middleware/authMiddleware')
  
router.route('/user/login').post(login)  //api/v1/user/login
router.route('/user/create').post(createUser) //api/v1/user/create
router.route('/users').get( getAllUsers)  //alternate way =  router.get('/users', getAllUsers )
router.route('/user/:id').get(isAuthenticatedUser, getUserById)
router.route('/account/logout').get(logout)
router.route('/user/update/:id').get(updateUser)  //api/v1/user/update/11
router.route('/user/delete/:id').get(isAuthenticatedUser, deleteUser)  //api/v1/user/delete/11

module.exports = router