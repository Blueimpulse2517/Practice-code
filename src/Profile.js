import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <>
      <h1>MyProfile</h1>
      <Link to = "/UpdateProfile">Update MyProfile</Link>
      
    </>
  
  )
}

export default Profile