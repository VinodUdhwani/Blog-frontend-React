import React, { useEffect, useState } from 'react'
import userContext from './userContext';
import { getCurrentUser, isLoggedIn } from '../../auth/auth';
function UserProvider({children}) {
  const[user,setUser]=useState({
    data:{},
    login:''
  })

  useEffect(()=>{
    setUser({
      data:getCurrentUser(),
      login:isLoggedIn()
    })
  },[])
  
  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;