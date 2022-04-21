const express = require('express')
const router = express.Router()
const {
    login,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
  } = require('../Controllers/userControllers')
  
router.route('/user/login').post(login)  //api/v1/user/login
router.route('/user/create').post(createUser) //api/v1/user/create
router.route('/users').get(getAllUsers)  //alternate way =  router.get('/users', getAllUsers )
router.route('/user/:id').get(getUserById)
router.route('/user/update/:id').get(updateUser)  //api/v1/user/update/11
router.route('/user/delete/:id').get(deleteUser)  //api/v1/user/delete/11

module.exports = router