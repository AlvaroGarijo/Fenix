import React, { useState } from 'react';
import './styles/NavBar.css'

const NavBar = () => {

    const state = useState('');
    return (
        <>
            <nav className='orderNav'>
                <img className="logoNav" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-286.jpg?size=338&ext=jpg" alt="LogoFenix" />
                <div className='titleNav'> <a href="./">Fenix Fit</a> </div>

                <div className='orderListNav'>
                    <ol className='listNav'>
                        <li> <a href="./FenixFit">Fenix Fit</a></li>
                        <li> <a href="./Tarifas">Tarifas</a></li>
                        <li> <a href="./Opiniones">Opiniones</a></li>
                    </ol>

                    <div className='orderButton'>
                        <button><a href="./InicioSesion">Inicia Sesión</a> </button>
                        <button><a href="./Registro">Regístrate</a> </button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar;