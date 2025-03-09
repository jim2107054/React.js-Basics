import React,{ useState } from 'react'

//Error: React Hook "useState" is called in function "fetchData" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".
const FetchData = () => {
    const [counter, setcounter] = useState(0);
  return (
    <div>
        <h1>Counter = {counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>inc</button>
        <button onClick={()=>setcounter(counter-1)}>dec</button>
    </div>
  )
}

export default FetchData;