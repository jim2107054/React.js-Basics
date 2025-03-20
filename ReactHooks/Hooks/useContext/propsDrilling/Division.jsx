import React from 'react'
import District from './District'

const Division = ({money}) => {
  return (
    <div>
        <h1>Division component.</h1>
        <District money={money}/>
    </div>
  )
}

export default Division