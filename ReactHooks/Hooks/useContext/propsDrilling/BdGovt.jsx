import React from 'react'
import Division from './Division'

const BdGovt = () => {
    const money= 1000;
  return (
    <div>
        <h1>BdGovt component.</h1>
        <Division money={money}/>
        {/* passing props to Division component */}
    </div>
  )
}

export default BdGovt