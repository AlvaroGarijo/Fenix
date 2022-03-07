import React from 'react'

import { NavBarLogin } from './MovingUserLogin/navbarLogin/NavBarLogin';
import{ Planing } from './MovingUserLogin/navbarLogin/planing/Planing'

import './stylesUserLoginHome.css';

export const UserLoginHome = () => {
    return (
        <div>
            
            <div className='orderWrapp'>
                 <NavBarLogin/>
                 <Planing/>
           
        </div>     
        </div>
    )
}
