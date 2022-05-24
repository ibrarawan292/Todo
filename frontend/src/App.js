
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Register from './Pages/Register';

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
      <Register/>
    </div>
  
  );
}

export default App;
