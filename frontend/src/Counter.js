import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {


  const dispatch = useDispatch()
  const counter = useSelector(state => state)

  return (
    <div>
        <button onClick={() => dispatch({type:'increment'})}>+</button>
        <p>{counter}</p>
        <button onClick={() => dispatch({type:'decrement'})}>-</button>
    </div>
  )
}

export default Counter