
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 

  const [todos, setTodos] = useState('')

 

  useEffect(()=>{
 
    try {
     const todos =  axios.get('http://localhost:5000/api/v1/todos')
      .then((res) =>{
        setTodos(res.todos)
        console.log(todos)
      })
    } catch (error) {
      console.log(error)
    }
  
 },[])

  return (
    <div className='App'>
      
     
    </div>
  
  );
}

export default App;
