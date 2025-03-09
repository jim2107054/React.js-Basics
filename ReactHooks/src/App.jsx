import React from 'react'
import Counter from '../Hooks/useState/Counter'
import FetchData from '../Hooks/useEffect/fetchData'

const App = () => {
  return (
    <div>
      {/* useState Hooks */}
      {/* <Counter /> */}

      {/* useEffect Hooks */}
      <FetchData />
    </div>
  )
}

export default App