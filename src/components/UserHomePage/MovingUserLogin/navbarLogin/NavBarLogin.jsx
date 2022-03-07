
import React from 'react'
import { Link } from 'react-router-dom'
import './stylesNavBarLogin.css'

export const NavBarLogin = () => {
  return (
                <div className='NavBarUser'>
                    <img className='imgUserLog' src='../img/UsuarioCliente2.jpeg' alt="??"/>
                    <div className='nameUser'>Nombre y Apellidos</div>
                    <div className='listUserLog'>
                        <Link to='./newUser/ToAddClient/'><li>Añadir Usuario</li></Link>
                        <Link to='./planing/Planing'><li>Planifica</li></Link>
                        <Link to='./workouts/Workouts'><li>Workouts</li></Link>
                        <Link to='./clients/Clients'><li>Clientes</li></Link>
                      
                    </div>
                    <img className='imgLogoFenix' src='../img/logoFenixRojo.webp' alt="LogoFenix" />
                    <h3 className='titleNavBar'>FENIX FIT</h3>
                </div>
  )
}




