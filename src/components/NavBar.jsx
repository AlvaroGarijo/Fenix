import React, { useState } from 'react';
import './styles/NavBar.css'

const NavBar = () => {

    const state = useState('');
    return (
        <>
            <nav className='orderNav'>
                <img className="logoNav" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-286.jpg?size=338&ext=jpg" alt="LogoFenix" />
                <div className='titleNav'>Fenix Fit</div>

                <div className='orderListNav'>
                    <ol className='listNav'>
                        <li> <a href="#">Fenix Fit</a></li>
                        <li> <a href="#">Tarifas</a></li>
                        <li> <a href="#">Opiniones</a></li>
                    </ol>

                    <div className='orderButton'>
                        <button><a href="#">Inicia Sesión</a> </button>
                        <button><a href="#">Regístrate</a> </button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar;