import React from 'react'
import { Clients } from './MovingUserLogin/navbarLogin/clients/Clients';

import { NavBarLogin } from './MovingUserLogin/navbarLogin/NavBarLogin';
import { ToAddClient } from './MovingUserLogin/navbarLogin/newUser/ToAddClient';
import {Workouts} from './MovingUserLogin/navbarLogin/workouts/Workouts'
import {Planing} from './MovingUserLogin/navbarLogin/planing/Planing'
import { WorkoutsRouter } from './MovingUserLogin/navbarLogin/workouts/WorkoutsRouter';
import './stylesUserLoginHome.css';

export const UserLoginHome = () => {
    return (
            <div className='orderWrapp'>
                <NavBarLogin/>
                <Planing/>
                {/* <WorkoutsRouter/>
                <Clients/>
                <ToAddClient/> */}
            </div>     
    )
}
