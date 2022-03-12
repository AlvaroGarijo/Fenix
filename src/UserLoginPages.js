import React from 'react';
import {Outlet} from 'react-router-dom';
import { LinkNavBarRoute } from './components/UserHomePage/MovingUserLogin/navbarLogin/LinkNavBarRoute';
import { NavBarLogin } from './components/UserHomePage/MovingUserLogin/navbarLogin/NavBarLogin';


export const UserLoginPages = () => {


  return (
    <div>
      <NavBarLogin />
       
        
    </div>
  )
}
