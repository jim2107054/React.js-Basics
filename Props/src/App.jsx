import React from 'react'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <Profile
      name = "Jim"
      age  = {23}
      dept = "CSE"
      description={
        <div>
          <p>Hello, I'm Jim. I'm from KUET CSE.</p>
        </div>
      }
      >
        <h1>Jim's Profile</h1>
        <p>Welcome to my profile!</p>
      </Profile>

      <Profile
      name = "John"
      age  = {25}
      dept = "EEE"
      description={
        <div>
          <p>Hello, I'm John. I'm from KUET EEE.</p>
        </div>
      }
      >
        <h4>John's Profile</h4>
        <p>Welcome to my profile!</p>
      </Profile>
    </div>
  )
}

export default App