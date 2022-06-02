import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTodos } from './Redux/actions/todosAction'

const Todos = () => {


  const dispatch = useDispatch()
  const {todos} = useSelector(state=>state.todos)


  useEffect(() => {
      dispatch(getAllTodos());
  },[])

  return (
    <div>
       <p>todolist goes here</p>
      
       {
           todos && todos.map((todo) =>{
               return  <li key={todo._id}>{todo.title}</li>
           })
       }
       
    </div>
  )
}

export default Todos;