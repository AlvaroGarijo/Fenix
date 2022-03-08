import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    } from 'react-router-dom';
import { Login } from '../navBarPages/Login';
import { StartSesion } from '../navBarPages/StartSesion';
import { FenixFit } from '../navBarPages/FenixFit';
import { Tarifas } from '../navBarPages/Tarifas';
import {Opinions}  from '../navBarPages/Opinions';
import { Home } from '../Pages/Home';
import { FreePage } from '../freePage/FreePage';
import { UserLoginHome } from './UserHomePage/UserLoginHome';
import { Planing } from './UserHomePage/MovingUserLogin/navbarLogin/planing/Planing';
import { Workouts } from './UserHomePage/MovingUserLogin/navbarLogin/workouts/Workouts';
import { ToAddClient } from './UserHomePage/MovingUserLogin/navbarLogin/newUser/ToAddClient';
import { Clients } from './UserHomePage/MovingUserLogin/navbarLogin/clients/Clients';





const LineaDeRuta=()=>{
    return (
        <BrowserRouter>
             <Routes>
                 <Route path="/" element = {<Home/>}/>
                 <Route path="/Login" element={<Login/>}/>
                 <Route path="/StartSesion" element={<StartSesion/>}/>
                 <Route path="/FenixFit" element={<FenixFit/>}/>
                 <Route path="/Tarifas" element={<Tarifas/>}/>
                 <Route path="/Opinions" element={<Opinions/>}/>
                 <Route path="/FreePage" element= {<FreePage/>}/>
                 <Route path="/UserLoginHome" element={<UserLoginHome/>}/>
                 <Route path="/Planing" element={<Planing/>}/>
                 <Route path="/Workouts" element={<Workouts/>}/>
                 <Route path="/ToAddClients" element={<ToAddClient/>}/>
                 <Route path="/Clients" element={<Clients/>}/>
             </Routes>
                
        </BrowserRouter>
)
}
export default LineaDeRuta;

   
