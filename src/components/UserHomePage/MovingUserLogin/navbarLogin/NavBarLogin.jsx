
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Planing } from './planing/Planing'
import { Clients } from './clients/Clients'
import { Workouts } from './workouts/Workouts'
import { ToAddClient } from './newUser/ToAddClient'
import './stylesNavBarLogin.css'

export const NavBarLogin = () => {
  return (
                <div className='NavBarUser'>
                    <img className='imgUserLog' src='../img/UsuarioCliente2.jpeg' alt="??"/>
                    <div className='nameUser'>Nombre y Apellidos</div>
                    <div className='listUserLog'>
                      <BrowserRouter>
                          <Route path="/Planing" element={<Planing/>}/>
                          <Route path="/Workouts" element={<Workouts/>}/>
                          <Route path="/ToAddClient" element={<ToAddClient/>}/>
                          <Route path="/Clients" element={<Clients/>}/>
                      </BrowserRouter>
                    </div>
                    <img className='imgLogoFenix' src='../img/logoFenixRojo.webp' alt="LogoFenix" />
                    <h3 className='titleNavBar'>FENIX FIT</h3>
                </div>
  )
}




