import React from 'react'

import { NavBarLogin } from './MovingUserLogin/NavBarLogin';
import { ToAddClient } from './MovingUserLogin/newUser/ToAddClient';
import{ Planing } from './MovingUserLogin/planing/Planing'
import { Workouts } from './MovingUserLogin/workouts/Workouts';

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
