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
import { UserLoginHome } from './UserHomePage/UserLoginHome';
import { Planing } from './UserHomePage/MovingUserLogin/Planing';
import { Library } from './UserHomePage/MovingUserLogin/Library';
import { Evolution } from './UserHomePage/MovingUserLogin/Evolution';
import { Payments } from './UserHomePage/MovingUserLogin/Payments';
import { Chat } from './UserHomePage/MovingUserLogin/Chat';




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
                 <Route path="/UserLoginHome" element={<UserLoginHome/>}/>

                 {/* Movimientos Dentro de Usuario Logueado */}
                 <Route path="/Planing" element={<Planing/>}/>
                 {/* <Route path="/UserList" element={<UserList/>}/> */}
                 <Route path="/Library" element={<Library/>}/>
                 <Route path="/Evolution" element={<Evolution/>}/>
                 <Route path="/Payments" element={<Payments/>}/>
                 <Route path="/Chat" element={<Chat/>}/>

                 </Routes>
                
        </BrowserRouter>
)
}
export default LineaDeRuta;

   
