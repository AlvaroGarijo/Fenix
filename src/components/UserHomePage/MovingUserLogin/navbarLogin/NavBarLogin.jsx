
import React from 'react'

import { Planing } from './planing/Planing'
import { Clients } from './clients/Clients'
import { Workouts } from './workouts/Workouts'
import { ToAddClient } from './newUser/ToAddClient'
import './stylesNavBarLogin.css'
import { Link, Navigate } from 'react-router-dom'

export const NavBarLogin = () => {




  return (
                <div className='NavBarUser'>
                    <img className='imgUserLog' src='../img/UsuarioCliente2.jpeg' alt="??"/>
                    <div className='nameUser'>Nombre y Apellidos</div>
                    <div className='listUserLog'>
                      <Navigate>
                        <li><a href={<Planing/>}>Planifica</a></li>
                        <li><a href={<Workouts/>}>Workouts</a></li>
                        <li><a href={<Clients/>}>Clientes</a></li>
                        <li><a href={<ToAddClient/>}>Añadir Cliente</a></li>
                      </Navigate>


                    </div>
                    <img className='imgLogoFenix' src='../img/logoFenixRojo.webp' alt="LogoFenix" />
                    <h3 className='titleNavBar'>FENIX FIT</h3>
                </div>
  )
}




