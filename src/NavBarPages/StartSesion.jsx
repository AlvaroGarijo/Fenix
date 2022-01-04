import React from 'react'
import { Link } from 'react-router-dom'
import './styles/StartSesion.css'

export const StartSesion = () => {
    return (
        <>
            <div className='orderLogin'>
                <img className='imgLogo' src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-286.jpg?size=338&ext=jpg" alt="FenixLogo" />
                <div className='Login'>
                    <div className='imgLogin'>Foto</div>

                    <form className='formUser'>
                        <img className='imgUser' src="https://cdn-icons.flaticon.com/png/512/2354/premium/2354573.png?token=exp=1641303585~hmac=5023ef449d3b916391b388f09f6aa545" alt="userLogo" />
                        <div className='positionIcon1'>
                            <label htmlFor="Usuario">Nombre de Usuario:</label>
                            <input type="text" id="usuario" placeholder='Usuario' />
                        </div>
                    </form>
                    <form className='formPassword'>
                        <img className='imgUser' src="https://cdn-icons-png.flaticon.com/512/6475/6475250.png" alt="userLogo" />
                        <div className='positionIcon2'>
                            <label htmlFor="Password">Password:</label>
                            <input type="password" id="clave" required placeholder='Password' />
                        </div>
                    </form>
                    <div className='orderButton'>
                        <button type='button' className='buttonStart' >Start</button>
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

