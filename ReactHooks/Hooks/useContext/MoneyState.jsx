import React, { useState } from 'react'
import MyContext from './MyContect';

function MoneyState(props) {
  const money=10000;

  const [counter, setCounter] = useState(0)
  return (
    <MyContext.Provider value={{money,counter,setCounter}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MoneyState