import React from 'react'
import People from './People';

const Upazilla = ({money}) => {
  return (
    <div>
        <h1>Upazilla component</h1>
        <People money={money}/>
    </div>
  )
}

export default Upazilla