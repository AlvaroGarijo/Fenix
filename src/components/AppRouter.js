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
import  {Opinions}  from '../NavBarPages/Opinions';
import { Home } from '../Pages/Home';
import { FreePage } from './FreePage/FreePage';



const LineaDeRuta =()=>{
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
            </Routes>
        </BrowserRouter>
)
}
export default LineaDeRuta;


