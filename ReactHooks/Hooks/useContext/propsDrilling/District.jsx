import React from 'react'
import Upazilla from './Upazilla'

const District = ({money}) => {
  return (
    <div>
        <h1>District component.</h1>
        <Upazilla money={money}/>
    </div>
  )
}

export default District