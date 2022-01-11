import React, { useState } from 'react';
import './styles/NavBar.css'

const NavBar = () => {

    return (
        <>
            <nav className='orderNav'>
                <div className='orderLogo' >
                    <img className="logoNav" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-286.jpg?size=338&ext=jpg" alt="LogoFenix" />
                    <div className='titleNav'> <a href="./">FENIX FIT </a> </div>
                </div>
                <div className='orderListNav'>
                    <ol className='listNav'>
                        <li> <a href="./FenixFit">FENIX FIT</a></li>
                        <li> <a href="./Tarifas">TARIFAS</a></li>
                        <li> <a href="./Opinions">OPINIONES</a></li>
                    </ol>

                    <div className='orderButton'>
                        <button className='iniciaSesion'><a href="./StartSesion">Inicia Sesion</a> </button>
                        <button className='login'><a href="./Login">Login</a></button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar;