import React, { useState } from 'react'

const Counter = () => {
  // let counter = 0;

  const [counter, setcounter] = useState(0);
  
  const increment = () => {
    setcounter(counter + 1);
  }
  const decrement = () => {
    if(counter > 0){
      setcounter(counter - 1);
    }
    else{
      alert('Counter cannot be negative');
    }
    
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter