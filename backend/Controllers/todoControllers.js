const Todo =require('../models/todoSchema')



const todos = [
    {
      "id": 11,
      "title": "This is some title",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, aspernatur?"
  
    },
    {
      "id": 12,
      "title": "This is another title",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, aspernatur?"
  
    }
  ]
  
exports.createNewTodo = async (req, res) => {
    const body = req.body;
   try {
     await Todo.create(body)
   } catch (error) {
     console.log(error)
   }
    // console.log(body)
    res.json({
      "message": "Record has been saved"
    })
}


exports.getAllTodos = async(req, res) => {
    try {
      const todos = await Todo.find({})
      res.json({
        "data":todos
      })
    } catch (error) {
      console.log(error)
    }

}

exports.getTodoById = async (req, res) => {
   try {
     const todo = await Todo.findById(req.params.id)
     res.json({
       "data": todo
     })
   } catch (error) {
      console.log(error)
   }

}
exports.updateTodo = async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
      res.json({
        "Message": "Record has been updated"
      })
    } catch (error) {
       console.log(error)
    }
  
}
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    todo.remove();
    res.json({
      "Message": "Record has been deleted"
    })
  } catch (error) {
     console.log(error)
  }

}