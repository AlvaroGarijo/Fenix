import React from 'react'

import{
    BrowserRouter,
    Routes,
    Route,
    } from 'react-router-dom';

import { ToAddClient } from './UserHomePage/MovingUserLogin/navbarLogin/newUser/ToAddClient';
import { Planing } from './UserHomePage/MovingUserLogin/navbarLogin/planing/Planing';
import { Workouts } from './UserHomePage/MovingUserLogin/navbarLogin/workouts/Workouts';
import { Clients } from './UserHomePage/MovingUserLogin/navbarLogin/clients/Clients';



export const MovingRouter = () => {


    
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/Planing" element={<Planing/>}/>
            <Route path="/Workouts" element={<Workouts/>}/>
            <Route path="/ToAddClient" element={<ToAddClient/>}/>
            <Route path="/Clients" element={<Clients/>}/>
        </Routes>
    </BrowserRouter>

  )
}
