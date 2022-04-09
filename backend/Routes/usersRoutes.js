const express = require('express')
const router = express.Router()
const {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
  } = require('../Controllers/usersControllers')
  


router.route('/users').get(getAllUsers)  //alternate way =  router.get('/todos', getAllTodos )
router.route('/user/:id').get(getUserById)
router.route('/user/update/:id').get(updateUser)  //api/v1/todo/update/11
router.route('/user/delete/:id').get(deleteUser)  //api/v1/todo/delete/11
router.route('/user/new:id').get(createNewUser)
module.exports = router