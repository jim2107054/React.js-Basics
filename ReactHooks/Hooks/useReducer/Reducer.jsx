import React from 'react'
import { useReducer } from 'react'

const countReducer = (state, action) => {
  switch (action.type) {// action.type is a string.
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state;
  }
}

function Reducer() {

    const [state, dispatch] = useReducer(countReducer, {count: 0})

  return (
    <div>
        <h1>Counter value={state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
    </div>
  )
}

export default Reducer