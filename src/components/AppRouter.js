import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    } from 'react-router-dom';
import { Login } from '../NavBarPages/Login';
import { StartSesion } from '../NavBarPages/StartSesion';
import { FenixFit } from '../NavBarPages/FenixFit';
import { Tarifas } from '../NavBarPages/Tarifas';
import  {Opiniones}  from '../NavBarPages/Opinions';
import { Home } from '../Pages/Home';

const LineaDeRuta =()=>{
    return (
        <BrowserRouter>
             <Routes>
                 <Route path="/" element = {<Home/>}/>
                 <Route path="/Login" element={<Login/>}/>
                 <Route path="/StartSesion" element={<StartSesion/>}/>
                 <Route path="/FenixFit" element={<FenixFit/>}/>
                 <Route path="/Tarifas" element={<Tarifas/>}/>
                 <Route path="/Opiniones" element={<Opiniones/>}/>
            </Routes>
        </BrowserRouter>
)
}
export default LineaDeRuta;


