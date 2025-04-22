import React from 'react'

const Profile = (props) => {
    // Destructuring props
    const {name,age,dept,description,children} = props
  return (
    <>
    {/* <h1>Name is: {props.name}</h1>
    <h2>Age is: {props.age}</h2>
    <h2>Department: {props.dept}</h2>
    <p>Description: {props.description}</p>

    <div>{props.children}</div> */}

    <h1>Name is: {name}</h1>
    <h2>Age is: {age}</h2>
    <h2>Department: {dept}</h2>
    <p>Description: {description}</p>

    <div>{children}</div>
    </>
  )
}

export default Profile