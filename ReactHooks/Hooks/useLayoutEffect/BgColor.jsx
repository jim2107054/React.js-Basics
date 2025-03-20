import React, { useLayoutEffect, useState } from 'react'

const BgColor = () => {
    const [color, setColor] = useState('lightblue');

    useLayoutEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color]);//dependency array.

  return (
    <div>
        <h2>Current Background Color :{color}</h2>
        <button onClick={()=>setColor('red')}>Red</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <button onClick={()=>setColor('blue')}>Blue</button>
    </div>
  )
}

export default BgColor