import React from 'react'

import { NavBarLogin } from './MovingUserLogin/navbarLogin/NavBarLogin';
import { ToAddClient } from './MovingUserLogin/navbarLogin/newUser/ToAddClient';
import{ Planing } from './MovingUserLogin/navbarLogin/planing/Planing'
import { Workouts } from './MovingUserLogin/navbarLogin/workouts/Workouts';

import './stylesUserLoginHome.css';

export const UserLoginHome = () => {
    return (
        <div>
            
            <div className='orderWrapp'>
                 <NavBarLogin/>
                 <Planing/>
           
            <div className='orderUsersAndWorkoutTipes'>
                <ToAddClient/>
                <Workouts/>             
            </div> 
        </div>     
        </div>
    )
}
