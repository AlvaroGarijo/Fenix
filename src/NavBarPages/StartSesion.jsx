import React from 'react'
import { Link } from 'react-router-dom'
import './styles/StartSesion.css'

export const StartSesion = () => {
    return (
        <>
            <div className='orderStart'>
                <img className='imgLogo' src='./img/logoFenixRojo.webp' alt="FenixLogo" />
                <div className='Login'>
                    <form className='formUser'>
                        <img className='imgUser' src='img/userIcon.png' alt="userLogo" />
                        <div className='positionIcon1'>
                            <label htmlFor="Usuario">Nombre de Usuario:</label>
                            <input type="text" id="usuario" placeholder='Usuario' />
                        </div>
                    </form>
                    <form className='formPassword'>
                        <img className='imgUser' src='img/passwordIcon.png' alt="userLogo" />
                        <div className='positionIcon2'>
                            <label htmlFor="Password">Password:</label>
                            <input type="password" id="clave" required placeholder='Password' />
                        </div>
                    </form>

                    {/* IMPORTANTE CAMBIAR RUTAS DE LOGUEARSE */}

                    <div className='orderButtonSesion'>
                        <Link to='/UserLoginHome'><button type='button' className='buttonStart' >Empieza</button></Link>
                    </div>
                    <div className='orderLinks'>
                        <Link to="#">Si no eres miembro, regístrate AQUI </Link>
                        <Link to="#">¿No recuerdas tu contraseña? Recuperala AQUI</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

