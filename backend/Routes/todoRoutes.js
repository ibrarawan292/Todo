const express = require('express')
const router = express.Router()
const {
    createNewTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
  } = require('../Controllers/todoControllers')
  

router.route('/todo/new').post(createNewTodo)
router.route('/todos').get(getAllTodos)  //alternate way =  router.get('/todos', getAllTodos )
router.route('/todo/:id').get(getTodoById)
router.route('/todo/update/:id').put(updateTodo)  //api/v1/todo/update/11
router.route('/todo/delete/:id').delete(deleteTodo)  //api/v1/todo/delete/11




module.exports = router