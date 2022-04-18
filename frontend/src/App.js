
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 

  const [todos, setTodos] = useState('')

 async function getAllTodos(){
   try {
    const todos = await axios.get('http://localhost:5000/api/v1/todos')
     .then((res) =>{
       setTodos(res.data)
     })
   } catch (error) {
     console.log(error)
   }
 }

 useEffect(()=>{
      getAllTodos()
 },[])

  return (
    <div className='App'>
      {
        todos.map((todo) =>{
          return(
            <div>{todo.title}</div>
          )
        })
      }
    </div>
  
  );
}

export default App;
