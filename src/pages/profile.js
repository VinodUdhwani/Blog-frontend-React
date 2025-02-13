import React, { useContext } from 'react'
import userContext from './context/userContext'

function Profile() {
    const user=useContext(userContext)
  return (
    <div>
        Profile
        <h2>{user.name}</h2>
    </div>
  )
}

export default Profile