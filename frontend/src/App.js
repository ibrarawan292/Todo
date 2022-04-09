import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

 async function getAllTodos(){
   try {
    const todos = await axios.get('http://localhost:5000/api/v1/todos')
     console.log(todos)
   } catch (error) {
     console.log(error)
   }
 }

 useEffect(()=>{
    getAllTodos()
 },[])

  return (
    <div className='App'>
      <h1>All Todos</h1>
    </div>
  
  );
}

export default App;
