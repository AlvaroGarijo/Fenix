import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { Login } from '../../NavBarPages/Login';
import { StartSesion } from '../../NavBarPages/StartSesion';
import { FenixFit } from '../../NavBarPages/FenixFit';
import { Tarifas } from '../../NavBarPages/Tarifas';
import { Opinions } from '../../NavBarPages/Opinions';
import { Home } from '../../Pages/Home';
import { FreePage } from '../../FreePage/FreePage';
import { UserLoginHome } from '../UserHomePage/UserLoginHome';
import { Planing } from '../UserHomePage/MovingUserLogin/navbarLogin/planing/Planing';
import { Workouts } from '../UserHomePage/MovingUserLogin/navbarLogin/workouts/Workouts';
import { ToAddClient } from '../UserHomePage/MovingUserLogin/navbarLogin/newUser/ToAddClient';
import { Clients } from '../UserHomePage/MovingUserLogin/navbarLogin/clients/Clients';
import { MovingRouter } from '../../MovingRouter';





const LineaDeRuta = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MovingRouter" element={<MovingRouter />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/StartSesion" element={<StartSesion />} />
                <Route path="/FenixFit" element={<FenixFit />} />
                <Route path="/Tarifas" element={<Tarifas />} />
                <Route path="/Opinions" element={<Opinions />} />
                <Route path="/FreePage" element={<FreePage />} />
                <Route path="/UserLoginHome" element={<UserLoginHome />} />
                <Route path="/Planing" element={<Planing />} />
                <Route path="/Workouts" element={<Workouts />} />
                <Route path="/ToAddClients" element={<ToAddClient />} />
                <Route path="/Clients" element={<Clients />} />
            </Routes>

        </BrowserRouter>
    )
}
export default LineaDeRuta;


