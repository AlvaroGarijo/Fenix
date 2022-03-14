import React from 'react';
import { useState } from 'react';
import { Dashboard } from './components/UserHomePage/Dashboard';
import { Login } from './NavBarPages/Login';

export const UserLoginPages = () => {


  const [conect, setConect] = useState(false);

  const access = (state)=>{
    setConect(state);
  }
  return (
   
      conect ? <Dashboard/> : <Login access={access}/>
  
   
  )
}
